import Vue from 'vue'
import App from '@/views/App.vue'
import router from '@/plugins/RouterPlugin'
import store from '@/plugins/StorePlugin'

Vue.config.productionTip = false

import 'normalize.css'
import '@/assets/scss/all.scss'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
