const sidebar = require('./sidebar');
const { defineHopeConfig  } = require("vuepress-theme-hope");
module.exports = defineHopeConfig ({
    // site config
    title: 'Vgearen\'s Document',
    description: '温故知新',
    base: '/document/',
    locales: {
        "/": {
            // 设置正在使用的语言
            lang: "zh-CN",
        },
    },
    themeConfig: {
        pure: true,
        repo: 'https://github.com/VGEAREN/document',
        repoLabel: 'Github',
        sidebar: sidebar,
        docsDir: "docs",
        docsBranch: 'master',
        plugins: {
            copyCode: {
                showInMobile: true
            },
            mdEnhance: {
                enableAll: false,
                presentation: {
                    plugins: ["highlight", "math", "search", "notes", "zoom"],
                },
            },
        },
        encrypt: {
            global: true,
            admin: ["123456"]
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档',
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消',
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除',
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接',
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者',
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    openIssueText: '你认为该查询应该有结果？',
                                    openIssueLinkText: '点击反馈',
                                },
                            },
                        },
                    }
                },
            },
        ],
    ],
})