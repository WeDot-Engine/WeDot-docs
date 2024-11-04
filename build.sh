#!/bin/bash

BRANCHES=$(git branch -r | grep -v '\->' | sed 's|origin/||' | grep -v -E 'class' | tr '\n' ' ')

mkdir -p build

cp -v -u -r ./home/* ./build/

for branch in $BRANCHES; do
  git fetch origin $branch
  git checkout $branch
  echo "切换到分支：$branch"
  mdbook clean && mdbook build
  cp -v -u -r ./book/ ./build/$branch/
  ls ./build/$branch/
done

ls ./build
echo "构建完成"
