module.exports = {
    // site config
    lang: 'en-US',
    title: 'Vgearen\'s Document',
    description: '温故知新',
    base: '/document/',
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        sidebar: 'auto',
        repo: 'https://github.com/VGEAREN/document',
        repoLabel: 'Github',
    },
    head: [
        ['link', { rel: 'icon', href: '/ninja_1f977.png' }]
    ]
}