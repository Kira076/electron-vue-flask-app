import Vue from 'vue'
import VueRouter from 'vue-router'
import VueKonva from 'vue-konva'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(VueRouter)
Vue.use(VueKonva)
