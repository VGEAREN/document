const { defineSidebarConfig } = require("vuepress-theme-hope");;
module.exports = defineSidebarConfig({
        "/java/": [
            {
                text: "Java",
                collapsable: false,
                children: ["java.md", "springboot.md"],
            }
            ]
    })

// module.exports = [
//     // SidebarItem
//     {
//         text: 'Java',
//         link: '/java/',
//         children: [
//
//             // 字符串 - 页面文件路径
//             '/java/README.md',
//             '/java/springboot.md',
//         ],
//     },
// ]