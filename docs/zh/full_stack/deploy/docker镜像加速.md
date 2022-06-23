---
title: docker镜像加速
date: 2021-10-22 09:38:35
tags: [Docker]
category: [开发,Docker]
toc: true
---

对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）
```json
{
  "registry-mirrors": [
    "https://dockerhub.azk8s.cn",
    "https://reg-mirror.qiniu.com"
  ]
}

```
之后重新启动服务。
```shell
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker

```

