const {defineSidebarConfig} = require("vuepress-theme-hope");

module.exports = defineSidebarConfig({
    "/": [
        {
            prefix: "java/",
            text: "Java",
            collapsable: true,
            children: ["java-base.md", "springboot.md"],
        },
        {
            prefix: "computer_network/",
            text: "计算机网络",
            collapsable: true,
            children: ["http.md","https.md","websocket.md"],
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
                    children: ["innodb_index.md","innodb_concurrency_control.md","innodb_transaction.md"],
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
