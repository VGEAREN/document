---
title: 使用Github Action来自动化构建Maven项目
date: 2021-07-10 10:42:07
tags: [GitHub Action,Maven]
category: [开发,Github Action]
toc: true
---

## 简介
本文主要介绍如何把Github仓库中的Maven项目通过Github Action进行自动化构建后生成Jar包，接着拷贝到服务器进行部署。
<!-- more -->
## 服务器脚本

* 脚本`application.sh`用于启停应用:

    ``` bash
    #!/bin/bash
    
    # application jar's name
    appDir=~/java_deploy
    application=$(find $appDir -type f -name "*.jar") 
    
    ## determine existence of processus of application
    isExist(){
        ## check pid
        pid=`ps -ef | grep ${application} | grep -v grep | awk '{print $2}'`
        ## if pid not exist return 0 else 1
        if [ -z "${pid}" ]; then
            return 0
        else
            return 1
        fi
    }
    
    log=$appDir/application.log
    
    ## start application in background and generate appDir/application.log
    function start()
    {
        ## deermine existence of processus
        isExist
        ## if not running
        if [ $? -eq "0" ]; then
            echo "Your ${application} is not running"
            nohup java -jar $application --spring.profiles.active=test > $log &
            echo "${application} startup success"
        else
            echo "${application} is running, pid=${pid} "
        fi
    }
    
    ## stop the processus application
    function stop()
    {
        isExist
        ## if not exist - ok
        if [ $? -eq "0" ]; then
            echo "${application} is not running"
        else
            echo "${application} is running, pid=${pid}, prepare kill it "
            # if exist - kill the processus
            kill -9 ${pid}
            echo "${application} has been successfully killed"
        fi
    }
    
    ## check status
    function status()
    {
        appPid=`ps -ef |grep java|grep $application |awk '{print $2}'`
        if [ -z $appPid ]; then
            echo -e "Not running " 
        else
            echo -e "Running [$appPid] " 
        fi
    }
    
    ## restart
    function restart(){
        stop
        start
    }
    
    ## arg
    case "$1" in
        "start")
            start
            ;;
        "stop")
            stop
            ;;
        "restart")
            restart
            ;;
        "status")
            status
            ;;	
        *)
            echo "please enter the correct commands: "
            echo "such as : sh application.sh [ start | stop | restart |status ]"
            ;;
    esac
    ```

## 配置仓库Setting --> Secrets

| Key | Value |
|:---|:---|
|HOST|你的服务器地址| 
|USERNAME|SSH连接用户名|
|PASSWORD| SSH连接密码|
|PORT|SSH端口|


## Github Action


``` yaml
name: Java CI with Maven & Deploy

on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Setup java
        uses: actions/setup-java@v2
        with:
          java-version: '8'
          distribution: 'adopt'
      - name: Build with Maven
        run: mvn clean package -Dmaven.test.skip=true
      - name: Deploy to Server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          source: "your project path/*.jar"
          target: "target path"
          strip_components: 2
      - name: Run SSH Command
        uses: appleboy/ssh-action@master
        with:
            host: ${{ secrets.HOST }}
            username: ${{ secrets.USERNAME }}
            password: ${{ secrets.PASSWORD }}
            port: ${{ secrets.PORT }}
            script: "your path/application.sh restart"
```
