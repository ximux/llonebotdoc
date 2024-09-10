import comp from "C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/content/one/two.html.vue"
const data = JSON.parse("{\"path\":\"/content/one/two.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"two\",\"slug\":\"two\",\"link\":\"#two\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"content/one/two.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
