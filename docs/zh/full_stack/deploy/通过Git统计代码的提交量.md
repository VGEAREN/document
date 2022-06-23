---
title: 通过Git统计代码的提交量
date: 2021-07-08 21:07:26
tags: Git
category: [开发,Git]
toc: true
---
项目中有时候需要统计代码量，可以通过Git来统计。

### 获取所有作者提交行数  
``` bash
git log  --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat:  --since ==2020-9-1 --until=2020-9-31 --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```
<!-- more -->
### 获取所有作者提交行数（排除某些文件夹）
``` bash
git log  --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat:   --numstat -- . ":(exclude)kapok/code"   | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```