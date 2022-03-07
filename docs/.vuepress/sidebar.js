const { defineSidebarConfig } = require("vuepress-theme-hope");;
module.exports = defineSidebarConfig({
        "/java/": [
            {
                text: "Java",
                collapsable: false,
                children: ["java-base.md", "springboot.md"],
            }
        ]
})
