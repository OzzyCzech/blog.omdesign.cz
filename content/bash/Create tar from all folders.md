---
title: Create tar from all folders
date: 2018-10-25
tags: [bash, tar]
---


# Create tar from all folders

Follow commands create tar archives folder by folder into their own tar - so folder becomes *folder.tar*

**Compressed archive**

```shell script
find . -type d -maxdepth 1 -mindepth 1 -exec tar zcvf {}.tar.gz {} \;
```

**Un-coompressed archive**

```shell script
find . -type d -maxdepth 1 -mindepth 1 -exec tar cvf {}.tar {}  \;
```
