---
title: Mysql读写分离
date: 2021-10-19 14:35:46
tags: [Mysql, 读写分离]
category: [开发,Mysql]
toc: true
---

## 什么是主从复制、读写分离？
MySQL的主从复制和读写分离是一起出现的，目的是为了提升数据库的并发性能。

MySQL 主从复制是指数据可以从一个MySQL数据库服务器主节点复制到一个或多个从节点。

MySQL 的读写分离是指如果有三台MySQL，一台mater只负责写操作，两台salve只负责读操作。

**主从复制、读写分离就是为了数据库能支持更大的并发。**

随着业务量的扩展、如果是单机部署的MySQL，会导致I/O频率过高。采用主从复制、读写分离可以提高数据库的可用性。

<!-- more -->

## 主从复制

### 主从复制的原理
* 1、当Master节点进行insert、update、delete操作时，会按顺序写入到binlog中。

* 2、salve从库连接master主库，Master有多少个slave就会创建多少个binlog dump线程。

* 3、当Master节点的binlog发生变化时，binlog dump 线程会通知所有的salve节点，并将相应的binlog内容推送给slave节点。

* 4、I/O线程接收到 binlog 内容后，将内容写入到本地的 relay-log。

* 5、SQL线程读取I/O线程写入的relay-log，并且根据 relay-log 的内容对从数据库做对应的操作。

### 如何实现主从复制

目前有两台主机，一台是Master(192.168.10.214)，一台是Slave(192.168.10.227)。

#### master配置

使用命令行进入mysql：

`mysql -u root -p`

创建从库连接主库的账号并授权：

```sql
# 192.168.10.227是slave从机的IP
GRANT REPLICATION SLAVE ON *.* to 'slave_user'@'192.168.10.227' identified by 'testpass';
# 刷新权限
FLUSH PRIVILEGES;
```

在/etc/my.cnf配置文件中添加以下配置：

```
# 开启binlog
log-bin=mysql-bin
server-id=1
# 需要同步的数据库，如果不配置则同步全部数据库
binlog-do-db=test_db
# binlog日志保留的天数，清除超过10天的日志
# 防止日志文件过大，导致磁盘空间不足
expire-logs-days=10 
```

配置完成后重启数据库：

`service mysql restart`

可以通过命令`show master status\G;`查看当前binlog日志的信息。

```sql
*************************** 1. row ***************************
             File: mysql-bin.000005
         	 Position: 80770
    		 Binlog_Do_DB: test_db
 			 Binlog_Ignore_DB: 
			 Executed_Gtid_Set:
```



#### Slave配置

在/etc/my.cnf配置文件中添加以下配置：

`server-id=2`

登录mysql：

`mysql -u root -p`

运行sql：

```sql
CHANGE MASTER TO
MASTER_HOST='192.168.10.214', # 主机IP
MASTER_USER='slave_user',
MASTER_PASSWORD='testpass',
MASTER_LOG_FILE='mysql-bin.000005',
MASTER_LOG_POS=68737, # 这里是show master status;中的Position
master_port=3306;
```

然后启动slave：

```sql
# 启动slave服务
start slave;
```

启动完之后查看一下结果：

```sql
show slave status\G;
```

```sql
*************************** 1. row ***************************
                Slave_IO_State: Waiting for master to send event
                   Master_Host: 192.168.10.214
                   Master_User: root
                   Master_Port: 3306
                 Connect_Retry: 60
               Master_Log_File: mysql-bin.000005
           Read_Master_Log_Pos: 71914
                Relay_Log_File: mysql-relay-bin.000002
                 Relay_Log_Pos: 3469
         Relay_Master_Log_File: mysql-bin.000005
              Slave_IO_Running: Yes
             Slave_SQL_Running: Yes
               Replicate_Do_DB:
           Replicate_Ignore_DB:
            Replicate_Do_Table:
        Replicate_Ignore_Table:
       Replicate_Wild_Do_Table:
   Replicate_Wild_Ignore_Table:
                    Last_Errno: 0
                    Last_Error:
                  Skip_Counter: 0
           Exec_Master_Log_Pos: 71914
               Relay_Log_Space: 3778
               Until_Condition: None
                Until_Log_File:
                 Until_Log_Pos: 0
            Master_SSL_Allowed: No
            Master_SSL_CA_File:
            Master_SSL_CA_Path:
               Master_SSL_Cert:
             Master_SSL_Cipher:
                Master_SSL_Key:
         Seconds_Behind_Master: 0
 Master_SSL_Verify_Server_Cert: No
                 Last_IO_Errno: 0
                 Last_IO_Error:
                Last_SQL_Errno: 0
                Last_SQL_Error:
   Replicate_Ignore_Server_Ids:
              Master_Server_Id: 2
                Master_SSL_Crl:
            Master_SSL_Crlpath:
                    Using_Gtid: No
                   Gtid_IO_Pos:
       Replicate_Do_Domain_Ids:
   Replicate_Ignore_Domain_Ids:
                 Parallel_Mode: conservative
                     SQL_Delay: 0
           SQL_Remaining_Delay: NULL
       Slave_SQL_Running_State: Slave has read all relay log; waiting for the sl
ave I/O thread to update it
              Slave_DDL_Groups: 0
Slave_Non_Transactional_Groups: 0
    Slave_Transactional_Groups: 0
```



如果**Slave_IO_Running**和**Slave_SQL_Running**就是正常了。



这时可以测试下新增表或者插入数据，如果从库正常同步那就OK了。





## 读写分离

实现了主从复制后，我们开始实现读写分离。

目前使用的架构是：

```
Springboot: 1.5.13.RELEASE
Mybatis   : 3.4.5
Druid     : 1.1.4
```

基于Spring的AbstractRoutingDataSource和Mybatis plugin来实现动态切换数据源。



### 配置

首先我们先配置数据源，**建议从库赋予只读权限，因为从库不能更改**：

```properties
datasource.master.driver-class-name=com.mysql.jdbc.Driver
datasource.master.url=jdbc:mysql://192.168.10.214:3306/youbang
datasource.master.username=root
datasource.master.password=

datasource.slave0.driver-class-name=com.mysql.jdbc.Driver
datasource.slave0.url=jdbc:mysql://192.168.10.186:3306/youbang
datasource.slave0.username=root
datasource.slave0.password=
```



#### 读取配置

```java
@Configuration
public class DataSourcePropertiesConfig {

    @Primary
    @Bean("masterDataSourceProperties")
    @ConfigurationProperties("datasource.master")
    public DataSourceProperties masterDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean("slave0DataSourceProperties")
    @ConfigurationProperties("datasource.slave0")
    public DataSourceProperties slave0DataSourceProperties() {
        return new DataSourceProperties();
    }
}
```



#### 实现AbstractRoutingDataSource

Spring提供了`AbstractRoutingDataSource`，提供了动态选择数据源的功能，替换原有的单一数据源后，即可实现读写分离:

```java
@Component
public class CustomRoutingDataSource extends AbstractRoutingDataSource {

    @Resource(name = "masterDataSourceProperties")
    private DataSourceProperties masterProperties;

    @Resource(name = "slave0DataSourceProperties")
    private DataSourceProperties slave0Properties;


    @Override
    public void afterPropertiesSet() {
        DataSource masterDataSource =
                masterProperties.initializeDataSourceBuilder().type(DruidDataSource.class).build();
        DataSource slave0DataSource =
                slave0Properties.initializeDataSourceBuilder().type(DruidDataSource.class).build();

        setDefaultTargetDataSource(masterDataSource);

        Map<Object, Object> dataSourceMap = new HashMap<>();
        dataSourceMap.put(DataSourceHolder.MASTER_DATASOURCE, masterDataSource);
        dataSourceMap.put(DataSourceHolder.SLAVE0_DATASOURCE, slave0DataSource);
        setTargetDataSources(dataSourceMap);

        super.afterPropertiesSet();
    }

    @Override
    protected Object determineCurrentLookupKey() {
        String key = DataSourceHolder.getDataSource();

        if (key == null) {
            // default datasource
            return DataSourceHolder.MASTER_DATASOURCE;
        }

        return key;
    }
```



`AbstractRoutingDataSource`内部维护了一个`Map<Object, Object>`的Map
初始话时，将master、slave两个数据源加入到这个map
调用数据源时，determineCurrentLookupKey()方法返回了需要使用的数据源对应的key

当前线程需要使用的数据源对应的key，在`DataSourceHolder`中维护：

```java
public class DataSourceHolder {
    public static final String MASTER_DATASOURCE = "master";
    public static final String SLAVE0_DATASOURCE = "slave0";

    private static final ThreadLocal<String> local = new ThreadLocal<>();


    public static void putDataSource(String dataSource) {
        local.set(dataSource);
    }

    public static String getDataSource() {
        return local.get();
    }

    public static void clearDataSource() {
        local.remove();
    }

}
```



#### 实现Mybatis Plugins

当调用的Sql时Select类型时，将数据源切换到slave，其他情况数据源使用master；

**注意，如果处于事务中，数据源只使用master，保持数据一致性**

```java
@Intercepts({
        @Signature(type = Executor.class, method = "update",
                args = {MappedStatement.class, Object.class}),
        @Signature(type = Executor.class, method = "query",
                args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),
        @Signature(type = Executor.class, method = "query",
                args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class,
                        CacheKey.class, BoundSql.class})})
public class MybatisDataSourceInterceptor implements Interceptor {

    @Override
    public Object intercept(Invocation invocation) throws Throwable {

        boolean synchronizationActive = TransactionSynchronizationManager.isSynchronizationActive();
        if(!synchronizationActive) {
            Object[] objects = invocation.getArgs();
            MappedStatement ms = (MappedStatement) objects[0];

            if (ms.getSqlCommandType().equals(SqlCommandType.SELECT)) {
                DataSourceHolder.putDataSource(DataSourceHolder.SLAVE0_DATASOURCE);
            }
        }

        return invocation.proceed();
    }

    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }

    @Override
    public void setProperties(Properties properties) {
    }
}
```

在`SqlSessionFactoryBean`中新增插件：

```java
@Bean
    public SqlSessionFactory sqlSessionFactoryBean(DataSource dataSource) throws Exception {
        SqlSessionFactoryBean factory = new SqlSessionFactoryBean();
        factory.setDataSource(dataSource);
        factory.setTypeAliasesPackage(MODEL_PACKAGE);

        MybatisDataSourceInterceptor mybatisDataSourceInterceptor = new MybatisDataSourceInterceptor();
        //添加插件
        factory.setPlugins(new Interceptor[]{mybatisDataSourceInterceptor});

        return factory.getObject();
    }
```



这里可以验证一下是否写操作走master，读操作走slave，我这里是通过jmeter并发请求来测试。
