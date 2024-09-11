import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'


export default defineUserConfig({
  lang: 'en-US',
  title: 'LLOneBot文档',
  description: 'LLOneBot文档',
  base:'/llonebotdoc/',

  theme: defaultTheme({
    logo: 'https://s2.loli.net/2024/09/11/qVwpDM9XOzJE7UI.png',
    repo: 'https://gitee.com/msswy/LLOneBotPlus',
    navbar: [
      {
        text: '文档',
        prefix: '/content/',
        children: ['简介.md', '快速开始.md'],
      },
      {
        text: 'API',
        link: '/api/one.md',
      },
    ],
   
    sidebar: {
      //主页内容
      '/content/': [
        {
          text: 'LLOneBot',
          // 相对路径会自动追加子路径前缀
          children: [
            '简介.md', // 解析为 `/guide/introduction.md`
            '快速开始.md', // 解析为 `/guide/getting-started.md`
          ],
        },
      ],

      //api
      '/api/': [
        {
          text: 'API',
          // 相对路径会自动追加子路径前缀
          children: [
            'one.md', // 解析为 `/guide/introduction.md`
            'two.md', // 解析为 `/guide/getting-started.md`
          ],
        },
      ],

    },
  }),

  bundler: webpackBundler(),
  locales: {
    colorMode:'auto',
  },

})
