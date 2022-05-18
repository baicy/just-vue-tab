import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/just-vue-tab/',
  lang: 'zh-CN',
  title: 'just-vue-tab',
  description: '基于Vue3和Element Plus的轻量即用的标签页实现',
  lastUpdated: true,

  themeConfig: {
    repo: 'baicy/just-vue-tab',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '指南', link: '/'},
      { text: '更新日志', link: '/changelog'},
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '指南',
      children: [
        { text: '介绍', link: '/' },
        { text: '快速开始', link: '/guide/getting-started' }
      ]
    }
  ]
}