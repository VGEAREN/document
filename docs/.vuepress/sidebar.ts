import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/zh/knowledge/": [
        {
            text: "知识体系",
            icon: "creative",
            children: [
                {
                    prefix: "java/",
                    text: "Java",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "springboot/",
                    text: "Springboot",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "jvm/",
                    text: "JVM",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "algorithm/",
                    text: "算法",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "data_structure/",
                    text: "数据结构",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "mysql/",
                    text: "Mysql",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "sroucecode/",
                    text: "源码",
                    collapsable: true,
                    children: "structure"
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
                            children: "structure"
                        },
                        {
                            prefix: "design/",
                            text: "系统设计",
                            collapsable: true,
                            children: "structure"
                        },
                        {
                            prefix: "distributed/",
                            text: "分布式",
                            collapsable: true,
                            children: "structure"
                        },
                        {
                            prefix: "bigdata/",
                            text: "大数据",
                            collapsable: true,
                            children: "structure"
                        },
                    ],
                },
            ],
        }
    ],
    "/zh/full_stack/": [
        {
            text: "全栈",
            icon: "strong",
            children: [
                "stack/stack.md",
                {
                    prefix: "frontend/",
                    text: "前端",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "deploy/",
                    text: "部署",
                    collapsable: true,
                    children: "structure"
                },
                {
                    prefix: "computer_network/",
                    text: "计算机网络",
                    collapsable: true,
                    children: "structure"
                },
            ]
        }
    ],
    "/zh/ide/": [
        {
            text: "IDE",
            prefix: "",
            icon: "strong",
            children: "structure"
        }
    ]
});
