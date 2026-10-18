# 保险知识库

基于 VitePress 构建的保险知识文档站，涵盖保险基础、险种介绍、核保理赔实务与法律法规。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

产物输出至 `docs/.vitepress/dist`。

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

需在仓库 **Settings → Pages** 中将 Source 设置为 **GitHub Actions**。

## 目录结构

```
docs/
├── index.md              # 首页
├── .vitepress/
│   └── config.mts        # 站点配置
└── guide/
    ├── basics.md             # 保险基本概念
    ├── contract.md           # 保险合同要素
    ├── life-insurance.md     # 人寿保险
    ├── health-insurance.md   # 健康保险
    ├── property-insurance.md # 财产保险
    ├── auto-insurance.md     # 机动车保险
    ├── underwriting.md       # 核保流程
    ├── claims.md             # 理赔实务
    └── regulations.md        # 保险法与监管
```

## 贡献

欢迎在对应分类下补充或修订知识条目，提交 Pull Request。
