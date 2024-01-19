import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/base/',
  title: "My Flutter",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'MD 指令的快速參考',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
        
      },
      {
        text: '環境安裝',
        items: [
          { text: '1', link: '/aboutSetting/index' },
          { text: '2', link: '/aboutSetting/index' }
        ]
      },
      {
        text: '起手式',
        items: [
          { text: '1', link: '/aboutStart/index' },
          { text: '2', link: '/aboutStart/index' }
        ]
      },
      {
        text: '第一個 Hellow Word',
        items: [
          { text: '1', link: '/aboutFirstPt/index' },
          { text: '2', link: '/aboutFirstPt/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
