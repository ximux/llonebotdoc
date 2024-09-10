import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'


export default defineUserConfig({
  lang: 'en-US',
  title: 'LLOneBot文档',
  description: 'LLOneBot文档',

  theme: defaultTheme({
    logo: 'https://user-images.githubusercontent.com/25968335/120111974-8abef880-c139-11eb-99cd-fa928348b198.png',
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
