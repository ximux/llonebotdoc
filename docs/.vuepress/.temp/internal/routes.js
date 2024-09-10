export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/api/one.html", { loader: () => import(/* webpackChunkName: "api_one.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/api/one.html.js"), meta: {"title":"api1"} }],
  ["/api/two.html", { loader: () => import(/* webpackChunkName: "api_two.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/api/two.html.js"), meta: {"title":"api2"} }],
  ["/content/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html", { loader: () => import(/* webpackChunkName: "content_快速开始.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/content/快速开始.html.js"), meta: {"title":"写在前面"} }],
  ["/content/%E7%AE%80%E4%BB%8B.html", { loader: () => import(/* webpackChunkName: "content_简介.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/content/简介.html.js"), meta: {"title":"简介"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
