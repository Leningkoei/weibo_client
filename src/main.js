import 'animate.css'
import './assets/Catull_BQ_Regular.css'
import Vue from 'vue'
import {
    Avatar,
    Button,
    Descriptions,
    DescriptionsItem,
    Drawer,
    Form,
    FormItem,
    Input,
    Option,
    Pagination,
    Select,
    Table,
    TableColumn,
    TimePicker
} from 'element-ui'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'

Vue.config.productionTip = false

Vue.component(Avatar.name, Avatar)
Vue.component(Button.name, Button)
Vue.component(Descriptions.name, Descriptions)
Vue.component(DescriptionsItem.name, DescriptionsItem)
Vue.component(Drawer.name, Drawer)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Option.name, Option)
Vue.component(Pagination.name, Pagination)
Vue.component(Select.name, Select)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(TimePicker.name, TimePicker)

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
