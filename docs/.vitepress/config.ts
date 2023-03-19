import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = [

  { text: '快速开始', link: '/' },
  { text: '通用', collapsed: true, items: [{ text: 'Button 按钮', link: '/components/button/' }] },
  { text: '导航', },
  { text: '反馈', },
  { text: '数据录入', },
  { text: '数据展示', },
  { text: '布局', },
]



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyUI",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // markdown 插槽  markdown中使用 ::: slot name; 例如 ::: demo
  // https://www.vuepress.cn/guide/markdown-slot.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-markdown-%E6%8F%92%E6%A7%BD
  // 使用了插件 vitepress-theme-demoblock   
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin)

    }
  }
})
