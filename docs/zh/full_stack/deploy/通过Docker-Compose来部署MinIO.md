---
title: 通过Docker Compose来部署MinIO
date: 2021-08-05 10:02:59
tags: [Docker Compose,MinIO]
category: [开发,Docker]
toc: true
---

## 简介

MinIO 是一个基于Apache License v2.0开源协议的对象存储服务。它兼容亚马逊S3云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几kb到最大5T不等。

MinIO是一个非常轻量的服务,可以很简单的和其他应用的结合，类似 NodeJS, Redis 或者 MySQL。
<!-- more -->
## 前提条件

* 您的机器已经安装docker及docker compose。

## 部署
* docker-compose.yaml
    ```yaml
    version: '3.7'
    
    # Settings and configurations that are common for all containers
    x-minio-common: &minio-common
      image: minio/minio:RELEASE.2021-07-30T00-02-00Z
      command: server --console-address ":9001" http://minio{1...4}/data{1...2}
      expose:
        - "9000"
        - "9001"
      environment:
        MINIO_ROOT_USER: minio
        MINIO_ROOT_PASSWORD: minio123
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
        interval: 30s
        timeout: 20s
        retries: 3
    
    # starts 4 docker containers running minio server instances.
    # using nginx reverse proxy, load balancing, you can access
    # it through port 9000.
    services:
      minio1:
        <<: *minio-common
        hostname: minio1
        volumes:
          - data1-1:/data1
          - data1-2:/data2
    
      minio2:
        <<: *minio-common
        hostname: minio2
        volumes:
          - data2-1:/data1
          - data2-2:/data2
    
      minio3:
        <<: *minio-common
        hostname: minio3
        volumes:
          - data3-1:/data1
          - data3-2:/data2
    
      minio4:
        <<: *minio-common
        hostname: minio4
        volumes:
          - data4-1:/data1
          - data4-2:/data2
    
      nginx:
        image: nginx:1.19.2-alpine
        hostname: nginx
        volumes:
          - ./nginx.conf:/etc/nginx/nginx.conf:ro
        ports:
          - "9000:9000"
          - "9001:9001"
        depends_on:
          - minio1
          - minio2
          - minio3
          - minio4
    
    ## By default this config uses default local driver,
    ## For custom volumes replace with volume driver configuration.
    volumes:
      data1-1:
      data1-2:
      data2-1:
      data2-2:
      data3-1:
      data3-2:
      data4-1:
      data4-2:
    
    ```
* nginx.conf
    ```
    user  nginx;
    worker_processes  auto;
    
    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;
    
    events {
        worker_connections  4096;
    }
    
    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
        sendfile        on;
        keepalive_timeout  65;
    
        # include /etc/nginx/conf.d/*.conf;
    
        upstream minio {
            server minio1:9000;
            server minio2:9000;
            server minio3:9000;
            server minio4:9000;
        }
    
        upstream console {
            ip_hash;
            server minio1:9001;
            server minio2:9001;
            server minio3:9001;
            server minio4:9001;
        }
    
        server {
            listen       9000;
            listen  [::]:9000;
            server_name  localhost;
    
            # To allow special characters in headers
            ignore_invalid_headers off;
            # Allow any size file to be uploaded.
            # Set to a value such as 1000m; to restrict file size to a specific value
            client_max_body_size 0;
            # To disable buffering
            proxy_buffering off;
    
            location / {
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
    
                proxy_connect_timeout 300;
                # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
                proxy_http_version 1.1;
                proxy_set_header Connection "";
                chunked_transfer_encoding off;
    
                proxy_pass http://minio;
            }
        }
    
        server {
            listen       9001;
            listen  [::]:9001;
            server_name  localhost;
    
            # To allow special characters in headers
            ignore_invalid_headers off;
            # Allow any size file to be uploaded.
            # Set to a value such as 1000m; to restrict file size to a specific value
            client_max_body_size 0;
            # To disable buffering
            proxy_buffering off;
    
            location / {
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-NginX-Proxy true;
    
                # This is necessary to pass the correct IP to be hashed
                real_ip_header X-Real-IP;
    
                proxy_connect_timeout 300;
                # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
                proxy_http_version 1.1;
                proxy_set_header Connection "";
                chunked_transfer_encoding off;
    
                proxy_pass http://console;
            }
        }
    }
    ```
  

* 运行下面的命令
    ##### GNU/Linux and macOS
    ```shell
    docker-compose pull
    docker-compose up
    ```
    or
    ```shell
    docker stack deploy --compose-file docker-compose.yaml minio
    ```

    #### Windows
    ```shell
    docker-compose.exe pull
    docker-compose.exe up
    ```
    or
    ```shell
    Copydocker stack deploy --compose-file docker-compose.yaml minio
    ```

* 现在可以通过http://127.0.0.1:9000/访问MinIO server