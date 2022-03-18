---
title: 使用compression-webpack-plugin压缩静态资源
date: 2021-09-08 16:58:48
tags: [Webpack]
category: [开发,webpack]
toc: true
---

## 简介

由于前端静态资源太大，网络带宽太小，往往要加载很久才能出来，所以通过compression-webpack-plugin压缩静态资源，提升用户体验。
<!-- more -->
## 步骤
* 1、安装插件:
  `npm install compression-webpack-plugin --save-dev`
* 2、在vue.config.js配置插件:
    ``` js
    const webpackPlugins = []
    const CompressionPlugin = require('compression-webpack-plugin')
      webpackPlugins.push(new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/, // 需要压缩的文件类型
        threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
        minRatio: 0.5
      }))
    ```
* 3、configureWebpack中添加plugins
    ``` js
    configureWebpack: {
      ........
      plugins: webpackPlugins
    },
    ```
* 4、配置Nginx:
    ```
    location / {
        ........
        gzip_static on;
    }
    
    ```