import { defineComponent, createApp } from '../../node_modules/vue/dist/vue.esm-browser.js'

const App = defineComponent({
  name: 'App',

  setup() {
    function formatAsLocalDate() {
      return new Date().toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return {
      formatAsLocalDate,
    }
  },

  template: `<div>Сегодня {{ formatAsLocalDate() }}</div>`,
})

const app = createApp(App)
const vueApp = app.mount('#app')
window.vueApp = vueApp
