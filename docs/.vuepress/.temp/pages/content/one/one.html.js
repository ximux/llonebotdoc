import comp from "C:/publicfile/LLOneBotPlusdoc/llonebotdoc/docs/.vuepress/.temp/pages/content/one/one.html.vue"
const data = JSON.parse("{\"path\":\"/content/one/one.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"one\",\"slug\":\"one\",\"link\":\"#one\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"content/one/one.md\"}")
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
