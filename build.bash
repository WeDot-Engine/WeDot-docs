#!/bin/bash

workdir=$(pwd)

BRANCHES=$(git branch -r | grep -v '\->' | sed 's|origin/||' | grep -v -E 'class' | tr '\n' ' ')

mkdir -p $workdir/build

cp -v -u -r $workdir/home/* $workdir/build/

for branch in $BRANCHES; do
  git fetch origin $branch
  git checkout $branch
  echo "切换到分支：$branch"
  python $workdir/scripts/replace_site_url.py $workdir/book.toml $branch
  mdbook clean && mdbook build
  cp -v -u -r $workdir/book/ $workdir/build/$branch/
  ls $workdir/build/$branch/
done

ls $workdir/build
echo "构建完成"
