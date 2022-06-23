import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  pure: true,
  repo: 'https://github.com/VGEAREN/document',
  repoLabel: 'Github',
  sidebar: sidebar,
  navbar: navbar,
  docsDir: "docs",
  docsBranch: 'master',
  iconAssets: "iconfont",
  plugins: {
    copyCode: {
      showInMobile: true,
    },
    mdEnhance: {
      enableAll: false,
      tex: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
  encrypt: {
    global: true,
    admin: ["123456"]
  }
});
