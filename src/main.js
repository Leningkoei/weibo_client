import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    Button,
    Form,
    FormItem,
    Input,
    Row
} from 'element-ui'

import router from './router/index.js'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Row.name, Row)

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
