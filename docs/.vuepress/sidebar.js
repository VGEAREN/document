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
                "springboot.md"],
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
                "mysql_cluster.md"
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
        }
    ]
})
