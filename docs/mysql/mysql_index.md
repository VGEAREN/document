---
title: MySQL 索引概览
date: 2021-11-30 12:31:17
tags: [Mysql]
category: [开发,Mysql]
toc: true
---
转自：[MySQL 索引概览](https://blog.csdn.net/wallace_www/article/details/117264149)

## 索引定义

索引是一种专门用于帮助 SQL 高效获取数据的数据结构，一个常用的例子是，索引类似于一本书的目录，可以快速对特定值进行定位和查找，从而大大加快数据查询的效率。实际上，索引也是一张表，这张表保存了主键与索引字段，并指向实体表的记录（类似指针）。

## 索引优缺点

### 优点

- 索引大大减小了服务器需要扫描的数据量
- 索引可以帮助服务器避免排序和临时表
- 索引可以将随机IO变成顺序IO
- 索引对于InnoDB（对索引支持行级锁）非常重要，InnoDB仅对需要访问的元组加锁，而索引能够减少InnoDB访问的元组数。如果查询不能使用索引，MySQL会进行全表扫描，并锁住每一个元组，不管是否真正需要。

<!-- more -->
### 缺点

- 虽然索引大大提高了查询速度，同时却会降低更新表的速度。因为更新表时，MySQL不仅要保存数据，还要保存索引文件。因此，对应更新非常频繁的字段，通常不建议使用索引。
- 建立索引会占用磁盘空间。
- 如果某个数据列包含许多重复的内容，为它建立索引效果就很差，这个性质称为索引的选择性：不重复的索引值和数据表中的记录总数的比值。索引的选择性越高则查询效率越高。比如对性别字段建立索引，一百万条数据，只有男女两种可能，索引选择性为五十万分之一，索引效果就很差
- 对于非常小的表，索引意义不大，大部分情况下简单的全表扫描更高效。

因此应该只为最经常查询和最经常排序的数据列建立索引。MySQL里同一个数据表里的索引总数限制为16个。

# 索引类型

## 按功能逻辑划分

从功能逻辑来划分，索引主要分为 普通索引、唯一索引、主键索引和全文索引

### 普通索引

最基本的索引，它没有任何限制。普通索引（由关键字KEY或INDEX定义的索引）的唯一任务是加快对数据的访问速度。因此，应该只为那些最经常出现在查询条件(WHERE column = …)或排序条件(ORDER BY column)中的数据列创建索引。

普通索引的创建有三种方式。
```sql
# 创建索引
CREATE INDEX idx_username ON user_tbl(username);
# 对于字符串字段，可以手动指定长度，如 user_tbl(username(5))，表示只用前五个字符来做索引，可以进一步加快查询效率，索引长度要小于字段长度

# 修改表结构
ALTER TABLE user_tbl ADD INDEX idx_username (username)

# 创建表的时候直接指定，如
CREATE TABLE user_tbl( 
    ID INT NOT NULL, 
    username VARCHAR(16) NOT NULL, 
    INDEX idx_username (username) 
);
```
删除索引
```sql
DROP INDEX idx_username ON user_tbl;
```
查看索引
```sql
SHOW INDEX FROM user_tbl;
```

### 唯一索引

它与前面的普通索引类似，不同的就是：普通索引允许被索引的数据列包含重复的值。而唯一索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一。

唯一索引的创建跟普通索引类似：

```sql
#创建索引
CREATE UNIQUE INDEX idx_username ON user_tbl(username);

# 修改表结构
ALTER TABLE user_tbl ADD UNIQUE idx_username (username)

# 创建表的时候直接指定
CREATE TABLE user_tbl( 
    ID INT NOT NULL, 
    username VARCHAR(16) NOT NULL, 
    UNIQUE idx_username (username) 
);
```

### 主键索引

它是一种特殊的唯一索引，不允许有空值。一张表只能有一个主键，一般是在建表的时候同时创建。

```sql
CREATE TABLE user_tbl( 
    ID INT NOT NULL, 
    username VARCHAR(16) NOT NULL, 
    PRIMARY KEY(ID) 
); 
```

与之类似的是外键索引，如果为某个外键字段定义了一个外键约束条件，MySQL就会定义一个内部索引来帮助自己以最有效率的方式去管理和使用外键约束条件。

### 全文索引

在上一篇文章 [MySQL 基础语法](https://blog.csdn.net/wallace_www/article/details/116766427?spm=1001.2014.3001.5502) 中，我们说过如果使用了 LIKE + % 开头，就索引会失效，那么当我们需要前后都模糊搜索的需求（如 LIKE ‘%hello%’），就需要使用全文索引，需要注意的是，Innodb 只有在 5.6 版本之后才支持全文索引。

全文索引的创建和删除：

```sql
# 创建的两种方法
CREATE FULLTEXT INDEX idx_name ON tbl_name(field_name);
ALTER TABLE tbl_name ADD FULLTEXT INDEX idx_name(field_name);

# 删除的两种方法
DROP INDEX idx_name ON tbl_name;
ALTER TABLE tbl_name DROP INDEX idx_name;
```

使用全文索引进行全模糊匹配的语法为：

```sql
SELECT XXX FROM tbl_name WHERE match(field_name) against('xxx');
# 比如对 user_tbl 的 user_name 字段加了全文索引
# 查询结果等效于 SELECT user_name, user_id FROM user_tbl WHERE user_name LIKE '%hello%';
SELECT user_name, user_id FROM user_tbl WHERE match(user_name) against('hello');
```

使用 explain 检查，可以发现 fulltext 索引生效。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611121821388.png)

## 按物理实现划分

按物理实现方式来划分，通常可以分为聚集索引和非聚集索引。

### 聚集索引（clustered index）

存储内容是按照聚集索引排序的，聚集索引的顺序和行记录的顺序一致,一张表只能有一个聚集索引。聚集索引的叶子节点直接储存聚集索引指向的内容，因此查询的时候只需要进行一次查找。

聚集索引在创建主键时自动生成，如果没有主键，则根据第一个不为空的唯一索引自动生成，如果还没有，则自动生成一个隐式的聚集索引。

需要注意的是，在进行查询操作的时候，聚集索引的效率更高，因为少了一次查找；但是进行修改操作的时候，效率比非聚集索引低，因为直接修改了数据内容，为了标准数据内容的顺序和聚集索引顺序一致，会对数据页重新排序。

### 非聚集索引（non-clustered index）

非聚集索引虽然索引项是顺序存储的，但是索引项对应的内容是随机存储的，系统会维护单独的索引表来存储索引。

非聚集索引的叶子节点存储的是数据的地址，查询非聚集索引的时候，系统会进行两次查找，先查找索引，再查找索引对应位置的数据。因此非聚集索引也叫二级索引或者辅助索引。

## 按字段个数划分

按字段个数可以把索引分为单一索引和联合索引。

### 单一索引

索引字段只有一列时为单一索引，上述所有索引都是单一索引。

### 联合索引

将多个字段组合在一起创建的索引叫联合索引。如下：

```sql
ALTER TABLE user_tbl ADD INDEX idx_name_city_age (username,city,age);
```

#### 最左匹配原则

建立这样的联合索引，其实是相当于分别建立了下面三组联合索引：

```sql
usernname,city,age
usernname,city
usernname
```

为什么没有 city，age 这样的联合索引呢？这是因为MySQL联合索引的**最左匹配原则**，只会按照最左优先的顺序进行索引匹配，也就是说，(x,y,z) 和 (z,y,x) 是不同的索引，即使是使用联合索引中的字段查询，联合索引也有可能失效。

对于 (x,y,z)，只有在以下查询条件联合索引会生效：

```sql
WHERE x = 1
WHERE x = 1 AND y = 1
WHERE x = 1 AND y = 1 AND z = 1
```

对于其他情况，比如 `WHERE y = 1` 、`WHERE y = 1 AND z = 1` 等，就不会匹配联合索引，索引失效，注意对于 `WHERE x = 1 AND z = 1`，联合索引会对 x 生效，但是对 z 不生效。

可以扩展了解一下，理论上最左匹配原则中索引对 where 中子句的顺序也是敏感的，但是由于MySQL的查询优化器会自动调整 where 子句的条件顺序以使用适合的索引，所以实际上 where 子句顺序不影响索引的效果。

要注意的是，如果联合索引查询过程中有范围查询，就会停止匹配，比如下面的语句中， z 字段不能使用到索引：

```sql
WHERE x = 1 AND y > 2 AND z = 3
```

顺便提一下，可以用 `explain` 命令来查看在某个查询语句中索引是否生效，具体用法请参考[官网文档](https://dev.mysql.com/doc/refman/8.0/en/explain-output.html)。

如果分别在 x, y, z 上建立单列索引，让该表有3个单列索引，索引效率也会大不一样，在联合索引生效的情况下，单个索引的效率远远低于联合索引。这是由 MySQL 查询优化器的执行顺序决定的，在执行一条查询 sql 时，针对索引的选择大致有如下步骤：

1. MySQL 优化器根据搜索条件，找出所有可能使用的索引
2. 计算全表扫描的代价
3. 计算使用不同索引执行查询的代价
4. 对比各种执行方案的代价，找出成本最低的那一个

因此，虽然有多个单列索引，但 MySQL 只能用到其中的那个系统认为似乎是最有效率的，其他的就会失效。

## 按索引结构划分

不同的 mysql 数据引擎支持不同结构的索引，按结构划分，常用的索引为 B+树索引、Hash 索引、FULLTEXT索引 等，将在下一篇文章 [MySQL 索引结构](https://blog.csdn.net/wallace_www/article/details/117304921?spm=1001.2014.3001.5501) 中介绍。

# 使用总结

接下来我们来简单总结一下在什么场景下推荐使用索引。

## 推荐使用

1. WHERE, GROUP BY, ORDER BY 子句中的字段

2. 多个单列索引在多条件查询是只会有一个最优的索引生效，因此多条件查询中最好创建联合索引。

   联合索引的时候必须满足最左匹配原则，并且最好考虑到 sql 语句的执行顺序，比如 `WHERE a = 1 GROUP BY b ORDER BY c`, 那么联合索引应该设计为 `(a,b,c)`，因为在上一篇文章 [MySQL 基础语法](https://blog.csdn.net/wallace_www/article/details/116766427?spm=1001.2014.3001.5501) 中我们介绍过，mysql 查询语句的执行顺序 WHERE > GROUP BY > ORDER BY。

3. 多张表 JOIN 的时候，对表连接字段创建索引。

4. 当 SELECT 中有不在索引中的字段时，会先通过索引查询出满足条件的主键值，然后通过主键`回表`查询出所有的 SELECT 中的字段，影响查询效率。因此如果 SELECT 中的内容很少，为了避免回表，可以把 SELECT 中的字段都加到联合索引中，这也就是宽索引的概念。但是需要注意，如果索引字段过多，存储和维护索引的成本也会增加。


## 不推荐使用或索引失效情况

1. 数据量很小的表
2. 有大量重复数据的字段
3. 频繁更新的字段
4. 如果对索引字段使用了函数或者表达式计算，索引失效
5. innodb OR 条件没有对所有条件创建索引，索引失效
6. 大于小于条件 `<` `>`，索引是否生效取决于命中的数量比例，如果命中数量很多，索引生效，命中数量很小，索引失效
7. 不等于条件 `!=` `<>`，索引失效
8. LIKE 值以 `%` 开头，索引失效

