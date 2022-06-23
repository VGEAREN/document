---
title: Mysql备忘
date: 2021-10-20 11:27:57
tags: [Mysql]
category: [开发,Mysql]
toc: true
---



### Mysql权限

| 权限分布  | 可设置权限                                                   |
| :------- | :----------------------------------------------------------- |
| 表权限    | 'Select', 'Insert', 'Update', 'Delete', 'Create', 'Drop', 'Grant', 'References', 'Index', 'Alter' |
| 列权限    | 'Select', 'Insert', 'Update', 'References'                   |
| 过程权限   | 'Execute', 'Alter Routine', 'Grant'                          |

<!-- more -->

#### 用户操作

```mysql
# 新增用户
CREATE USER 'zhangsan'@'localhost' IDENTIFIED BY 'password';
CREATE USER 'zhangsan'@'%' IDENTIFIED BY 'password2';
CREATE USER 'zhangsan'@'192.168.10.1' IDENTIFIED BY 'password3';

# 删除用户
drop user zhangsan@'localhost';

# 修改用户密码
-- 第一种
ALTER USER 'zhangsan'@'localhost' IDENTIFIED BY 'mypassword';
-- 第二种
SET PASSWORD FOR 'zhangsan'@'localhost' = PASSWORD('mypassword');
-- 第三种
GRANT USAGE ON *.* TO 'zhangsan'@'localhost' IDENTIFIED BY 'mypassword';

# list所有用户
select * from mysql.user\G;
# 同理可以通过sql语句修改用户信息或者删除用户
```

#### 授权

```mysql
# 查看当前用户权限
show grants;
# 查看指定用户权限
show grants for 'zhangsan'@'%'; 

# 赋予所有权限
grant all privileges on *.* to 'zhangsan'@'%' with grant option;
# 赋予数据库权限
grant all privileges on test_db.* to 'zhangsan'@'%' with grant option;

# 回收权限
revoke all privileges ON *.* FROM admin@'localhost';
revoke insert,select,update,delete,drop,create,alter on test_db.* from admin@'%';

# 刷新权限
flush privileges;
```

* `with grant option` : 允许被授权的用户把得到的权限继续授给其它用户



#### 其他

```mysql
# 查看主节点状态
show master status\G;
# 查看从节点状态
show slave status\G;
```



#### 导出SQL

```shell
# 导出整个数据库结构和数据
mysqldump -h localhost -P3306 -uroot -p123456 database > dump.sql

#导出单个数据表结构和数据
mysqldump -h localhost -P3306 -uroot -p123456  database table > dump.sql

#导出整个数据库结构（不包含数据）
mysqldump -h localhost -P3306 -uroot -p123456  -d database > dump.sql

#导出单个数据表结构（不包含数据）
mysqldump -h localhost -P3306 -uroot -p123456  -d database table > dump.sql

#mysqldump 备份导出数据排除某张表
mysqldump -h localhost -P3306 -uroot -p123456  -d database table --ignore-table=dbname.tablename > dump.sql

```
mysql 8.0需要添加这一句 `--column-statistics=0` ，不然会报错。




