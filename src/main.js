import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueStorage from 'vue-ls'
// vue-ls 的配置
const storageOptions = {
  namespace: 'ce_',   // key 键的前缀（随便起）
  name: 'ls',          // 变量名称（随便起） 使用方式：Vue.变量名称 或 this.$变量名称
  storage: 'local'     // 作用范围：local、session、memory
}
Vue.use(VueStorage, storageOptions)

import App from './App.vue'
import router from './router'

import ProTable from './components/ProTable.vue'
import CollapsePanel from './components/CollapsePanel.vue'
Vue.component('ProTable', ProTable)
Vue.component('CollapsePanel', CollapsePanel)

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'medium' })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
