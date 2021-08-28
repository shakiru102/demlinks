import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
export const bus = new Vue()
Vue.use(VueScrollTo, {
  duration: '900',
  ease: 'ease'
})
Vue.use(VueMeta)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
