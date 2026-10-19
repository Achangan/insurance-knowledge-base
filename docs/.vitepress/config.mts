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
      { text: '配置与选购', link: '/guide/planning-methodology' },
      { text: '监管与动态', link: '/guide/regulatory-trends-2025' },
      { text: '学习日志', link: '/daily/2026-10-19' }
    ],
    sidebar: [
      {
        text: '每日学习日志',
        items: [
          { text: '2026-10-19', link: '/daily/2026-10-19' }
        ]
      },
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
        text: '配置与选购',
        items: [
          { text: '保险配置方法论', link: '/guide/planning-methodology' },
          { text: '网红保险产品拆解', link: '/guide/popular-products' }
        ]
      },
      {
        text: '监管与动态',
        items: [
          { text: '保险法与监管', link: '/guide/regulations' },
          { text: '保险监管新动向（2025—2026）', link: '/guide/regulatory-trends-2025' },
          { text: '保险与税务', link: '/guide/insurance-taxation' },
          { text: '保险公司偿付能力与监管', link: '/guide/solvency-regulation' }
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
