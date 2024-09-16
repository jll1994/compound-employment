import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
