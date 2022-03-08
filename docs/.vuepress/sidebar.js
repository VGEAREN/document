const {defineSidebarConfig} = require("vuepress-theme-hope");

module.exports = defineSidebarConfig({
    "/": [
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

    ]
})
