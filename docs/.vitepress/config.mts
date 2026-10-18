import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '保险知识库',
  description: '系统化的保险知识沉淀：险种、核保、理赔、法规与行业实践',
  lang: 'zh-CN',
  base: '/insurance-knowledge-base/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '保险基础', link: '/guide/basics' },
      { text: '险种介绍', link: '/guide/life-insurance' },
      { text: '核保与理赔', link: '/guide/underwriting' },
      { text: '法律法规', link: '/guide/regulations' }
    ],
    sidebar: [
      {
        text: '保险基础',
        items: [
          { text: '保险的基本概念', link: '/guide/basics' },
          { text: '保险合同要素', link: '/guide/contract' }
        ]
      },
      {
        text: '险种介绍',
        items: [
          { text: '人寿保险', link: '/guide/life-insurance' },
          { text: '健康保险', link: '/guide/health-insurance' },
          { text: '财产保险', link: '/guide/property-insurance' },
          { text: '机动车保险', link: '/guide/auto-insurance' }
        ]
      },
      {
        text: '核保与理赔',
        items: [
          { text: '核保流程', link: '/guide/underwriting' },
          { text: '理赔实务', link: '/guide/claims' }
        ]
      },
      {
        text: '法律法规',
        items: [
          { text: '保险法与监管', link: '/guide/regulations' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Achangan/insurance-knowledge-base' }
    ]
  }
})
