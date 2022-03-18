---
title: CentOS7 Firewall常用命令汇总
date: 2021-10-19 14:52:42
tags: [Linux,Firewall,Centos]
category: [服务器]
toc: true
---

* 1、firewalld启停

    ```shell
      # 启动
      systemctl start firewalld     
    
      # 查看状态
      systemctl status firewalld   
     
      # 下次不会开机启动
      systemctl disable firewalld   
    
      # 关闭
      systemctl stop firewalld      
    ```

* 2、常用操作
    ```shell
      # 添加端口
      firewall-cmd --zone=public --add-port=80/tcp --permanent
   
      # 重新载入   
      firewall-cmd --reload  
  
      # 查看端口                                     
      firewall-cmd --zone=public --query-port=80/tcp     
  
      # 删除端口         
      firewall-cmd --zone=public --remove-port=80/tcp --permanent
  
      # 查看所有打开的端口
      firewall-cmd --zone=public --list-ports
    ```



