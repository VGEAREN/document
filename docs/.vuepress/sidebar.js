const {defineSidebarConfig} = require("vuepress-theme-hope");

module.exports = defineSidebarConfig({
    "/": [
        {
            prefix: "stack/",
            text: "技术栈",
            collapsable: true,
            children: [ "stack.md" ]
        },
        {
            prefix: "java/",
            text: "Java",
            collapsable: true,
            children: [
                {
                    prefix: "jvm/",
                    text: "JVM虚拟机",
                    collapsable: true,
                    children: [
                        "architecture.md",
                        "classloader.md",
                        "runtime_area.md",
                        "gc.md",
                        "dispatcher.md",
                        "string-constant-pool.md",
                        "jvm-object-lifecycle.md"
                    ]
                },
                "java-base.md",
                "java-question.md",
                {
                    prefix: "springboot/",
                    text: "Spring Boot",
                    collapsable: true,
                    children: [
                        "springboot.md"
                    ]
                },
                "CGLib动态代理.md",
                "Java抽象类.md",
                "JAVA注解的底层实现.md",
                "Java类图.md",
                "JDK动态代理.md"
            ],
        },
        {
            prefix: "computer_network/",
            text: "计算机网络",
            collapsable: true,
            children: [
                "http.md",
                "https.md",
                "websocket.md"],
        },
        {
            prefix: "mysql/",
            text: "Mysql",
            collapsable: true,
            children: [
                {
                    prefix: "innodb/",
                    text: "InnoDB",
                    collapsable: true,
                    children: [
                        "innodb_index.md",
                        "innodb_concurrency_control.md",
                        "innodb_transaction.md"],
                },
                "mysql_cluster.md",
                "mysql_qa.md",
                "mysql_index.md",
                "mysql_remark.md",
                "mysql_rw.md"
            ],
        },
        {
            prefix: "redis/",
            text: "Redis",
            collapsable: true,
            children: ["redis.md"],
        },
        {
            prefix: "architecture/",
            text: "系统架构",
            collapsable: true,
            children: [
                "base.md",
                {
                    prefix: "concurrent/",
                    text: "高并发",
                    collapsable: true,
                    children: [
                        "design.md", "flow-control.md"
                    ]
                },
                {
                    prefix: "design/",
                    text: "系统设计",
                    collapsable: true,
                    children: [
                        "recommended.md", "seckill.md", "tinyURL.md"
                    ]
                },
                {
                    prefix: "distributed/",
                    text: "分布式",
                    collapsable: true,
                    children: [
                        "cache.md", "consensus.md", "dubbo.md","kafka.md" ,
                        "lock.md", "mq.md", "rpc.md","transaction.md","zk.md"
                    ]
                },
                {
                    prefix: "bigdata/",
                    text: "大数据",
                    collapsable: true,
                    children: [
                        "algo.md", "hbase.md", "hdfs.md"
                    ]
                },
            ],
        },
        {
            prefix: "algorithm/",
            text: "算法",
            collapsable: true,
            children: [
                "二叉树遍历.md",
            ]
        },
        {
            prefix: "ide/",
            text: "IDE",
            collapsable: true,
            children: [
                "IDEA中类图表示.md",
                "IDEA插件修改.md",
            ]
        },
        {
            prefix: "frontend/",
            text: "前端",
            collapsable: true,
            children: [
                "使用compression-webpack-plugin压缩静态资源.md"
            ]
        },
        {
            prefix: "sroucecode/",
            text: "源码",
            collapsable: true,
            children: [
                "从源码看PriorityQueue.md"
            ]
        },
        {
            prefix: "deploy/",
            text: "部署",
            collapsable: true,
            children: [
                "CentOS7-Firewall常用命令汇总.md",
                "docker镜像加速.md",
                "Linux性能监控常用命令.md",
                "使用Github-Action来自动化构建Maven项目.md",
                "如何发布自己的Maven包.md",
                "通过Docker-Compose来部署MinIO.md",
                "通过Git统计代码的提交量.md",
            ]
        }

    ]
})
