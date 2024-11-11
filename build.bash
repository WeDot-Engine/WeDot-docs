#!/bin/bash

workdir=$(pwd)

# 获取所有分支
BRANCHES=$(git branch -r | grep -v '\->' | sed 's|origin/||' | grep -v -E 'class' | tr '\n' ' ')

mkdir -p $workdir/build

cp -v -u -r $workdir/home/* $workdir/build/

# 遍历所有分支
for branch in $BRANCHES; do
  # 切换到分支
  git fetch origin $branch
  git checkout $branch
  echo "切换到分支：$branch"
  # 替换 mdbook 配置文件里的 site.url（生成网页相对根目录的路径）
  python $workdir/scripts/replace_site_url.py $workdir/book.toml $branch

  echo "构建中……"
  mdbook clean && mdbook build

  # 索引文件太大。需要分割成多段读取
  # searchindex.js 没有被引用了，所以删除
  rm $workdir/book/searchindex.js
  echo "分割搜索索引文件……"
  # Cloudflare pages 最大上传单个 25MB 文件 :-P
  split -b 24M -da 3 $workdir/book/searchindex.json $workdir/book/searchindex.json.
  rm $workdir/book/searchindex.json
  
  echo "覆盖搜索脚本……"
  rm $workdir/book/searcher.js
  INDEX_COUNT=$(ls $workdir/book/searchindex.json.* | wc -l)
  sed "s/\$INDEX_COUNT/${INDEX_COUNT}/g" $workdir/override/searcher.js > $workdir/book/searcher.js

  cp -v -u -r $workdir/book/ $workdir/build/$branch/
  ls $workdir/build/$branch/
done

ls $workdir/build
echo "构建完成。"
