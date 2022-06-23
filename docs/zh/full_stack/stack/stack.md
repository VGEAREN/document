---
title: 技术栈
---


##  4.1 技能

###  4.1.1 Java

####  JDK源码

1. HashMap

    1. HashMap的数据结构(1.7、1.8的区别)
    2. HashMap的实现原理
    3. HashMap扩容为什么是2^n-1
    4. HashMap是线程安全的吗
    5. HashMap、HashTable是什么关系？
2. ThreadLocal

    1. 讲讲你对ThreadLocal的一些理解
    2. ThreadLocal有哪些应用场景
    3. 了解过FastThreadLocal吗
3. ArrayList、LinkList

    1. 是否保证线程安全
    2. 底层数据结构
    3. 插入和删除是否受元素位置的影响
    4. 是否支持快速随机访问
    5. 内存空间占用
    6. 如何进行扩容的，默认初始化空间是多少
4. String StringBuffer StringBuilder

    1. 有什么区别
    2. 是线程安全的吗
5. jdk1.8的新特性

    1. lambda表达式
    2. Functional Interfaces
    3. Optionals
    4. Stream 流
    5. Parallel-Streams 并行流

#### 

1. volatile

    1. volatile 的作用和使用场景
    2. volatile 如何保证指令重排
    3. 什么情况下会发生指令重排
2. synchronized

    1. 一般用在什么场景
    2. 实现原理
    3. 锁升级过程(偏向锁、轻量级锁、重量级锁)
    4. 这是JVM层面锁，还是JDK层面锁｛JVM层面｝
    5. 这是一种悲观锁还是乐观锁｛悲观锁是独占锁｝
3. lock

    1. 这是JVM层面锁，还是JDK层面锁｛JDK层面｝
    2. 这是一种悲观锁还是乐观锁
    3. 是可重入锁吗
4. ReentrantLock

    1. 与synchronized相比较有什么不同
    2. ReentrantLock 与 Lock 的关系
    3. 锁过程中是否可中断，与之对应的synchronized可中断吗
5. CAS

    1. Unsafe 类的作用
    2. CAS 的理解(compareAndSet)
    3. 什么是ABA问题
    4. CAS的实现有什么(AtomicInteger)
6. AQS

    1. 实现类有哪些 ReentrantLock、Semaphore、CountDownLatch、CyclicBarrier
    2. 实现了AQS的锁有哪些 自旋锁、互斥锁、读锁写锁、条件产量、信号量、栅栏都是AQS的衍生物 内存屏障，几乎所有的处理器至少支持一种粗粒度的屏障指令，通常被称为“栅栏（Fence）”

####  多线程

1. 线程池的种类

    1. newCachedThreadPool
    2. newFixedThreadPool
    3. newScheduledThreadPool
    4. newSingleThreadExecutor
2. 线程的生命周期

    1. 新建、就绪、运行、阻塞(等待阻塞、同步阻塞、其他阻塞)、死亡

####  JVM

1. GC 优化
2. JVM 逃逸分析
3. 类的对象头都包括什么
4. new Object() 初始化都做了什么
5. 运行时数据区
6. Java的内存模型以及GC算法

####  设计模式

0. 设计模式6大原则 单一职责(一个类和方法只做一件事)、里氏替换(多态，子类可扩展父类)、依赖倒置(细节依赖抽象，下层依赖上层)、接口隔离(建立单一接口)、迪米特原则(最少知道，降低耦合)、开闭原则(抽象架构，扩展实现)
1. 创建型模式 这类模式提供创建对象的机制， 能够提升已有代码的灵活性和可复用性。
2. 结构型模式 这类模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。
3. 行为模式 这类模式负责对象间的高效沟通和职责委派。

####  反射、代理

1. 怎么实现反射调用方法
2. 怎么代理一个类，有什么场景使用
3. 类代理的原理是什么
4. 有什么框架可以做类代理

###  4.1.2 Redis

####  命令

1. 计数命令
2. 排序命令
3. 加锁命令

####  架构

1. 常用的数据类型
2. 数据淘汰策略
3. 单线程的为什么那么快
4. RDB和AOF的优缺点
5. 持久化策略选择

####  应用

1. 缓存雪崩、缓存穿透、缓存预热、缓存更新、缓存降级
2. Pipeline有什么好处，为什么要用pipeline
3. 是否使用过Redis集群，集群的原理是什么
4. Redis的同步机制了解么

###  4.1.3 Mysql

####  锁

1. 全局锁
2. 表锁
3. 行锁
4. 乐观锁、悲观锁
5. 排他锁
6. 锁优化

####  事务

1. 事物特征
2. 脏读
3. 幻读
4. 不可重复读
5. 事物隔离
6. 并发事物
7. 事物实现原理

####  日志

1. 慢查询日志
2. 错误日志
3. redo log(重做日志)
4. binlog(归档日志)
5. undo log(回滚日志)

####  索引

1. 聚集索引 VS 非聚集索引
2. 最左匹配原则
3. 前缀索引

####  引擎

1. InnoDB
2. MyISAM

##  4.2 框架

###  4.2.1 Spring

1. Bean的注册过程
2. Bean的定义都包括什么信息
3. Spring 事务中的隔离级别有哪几种
4. schedule 使用

###  4.2.2 Mybatis

1. mybatis在spring的使用中，只需要定义接口，就可以和xml中的配置的sql语句，进行关联，执行数据库增删改查操作。怎么实现的
2. session是怎么管理的

###  4.3.3 SpringBoot

1. SpringBoot 怎么开发一个自己的Stater

###  4.2.4 SpringCloud

1. spring cloud 断路器的作用是什么
2. spring cloud 的核心组件有哪些 Eureka：服务注册于发现。 Feign：基于动态代理机制，根据注解和选择的机器，拼接请求 url 地址，发起请求。 Ribbon：实现负载均衡，从一个服务的多台机器中选择一台。 Hystrix：提供线程池，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题。 Zuul：网关管理，由 Zuul 网关转发请求给对应的服务。

##  4.3 组件

###  4.3.1 Dubbo

1. 通信模型是什么样的
2. Dubbo 和 Spring Cloud 有什么区别
3. dubbo都支持什么协议，推荐用哪种 dubbo://（推荐） rmi:// hessian:// http:// webservice:// thrift:// memcached:// redis:// rest://
4. Dubbo里面有哪几种节点角色
5. Dubbo中怎么处理的超时断开

###  4.3.2 Mq

1. RabbitMq
2. Kafka

###  4.3.3 elasticsearch

1. elasticsearch 了解多少，说说你们公司 es 的集群架构，索引数据大小，分片有多少，以及一些调优手段 。
2. elasticsearch 的倒排索引是什么
3. elasticsearch 是如何实现 master 选举的
4. 详细描述一下 Elasticsearch 搜索的过程

###  4.3.4 Hbase

1. 拓展类问题

###  4.3.5 otter

1. 拓展类问题

##  4.4 工具

1. Idea
2. Maven
3. Jenkins
4. JMeter

##  4.5 架构

###  4.5.1 系统搭建

1. MVC
2. DDD 领域驱动设计

###  4.5.2 数据库设计

1. 分库分表(水平拆分、垂直拆分)
2. 业务场景
3. 基础配置优化相关

###  4.5.3 服务治理

1. 负载均衡
2. 熔断
3. 降级
4. 限流
5. 黑白名单

###  4.5.4 分布式任务

1. xxl-job

###  4.5.5 监控

1. 系统非入侵全链路监控
2. TP99、TP999、QPS、TPS的熟悉程度

###  4.5.6 压测

1. 是否压测过，有无经验
2. 对系统健壮性的把控
3. JVM参数
4. GC调优
5. 代码优化

##  4.6 环境

1. Linux
2. Tomcat
3. docker
4. k8s