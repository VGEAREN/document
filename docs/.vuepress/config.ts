import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  lang: "zh-CN",
  title: "Vgearen\'s Document",
  description: "温故知新",
  base: "/document/",
  theme,
  head: [
    ['link', { rel: 'icon', href: '/document/favicon.ico' }]
  ],
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    })
  ],
});
