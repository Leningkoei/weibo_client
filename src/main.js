import Vue from 'vue'
import {
    Avatar,
    Button,
    Descriptions,
    DescriptionsItem,
    Form,
    FormItem,
    Input,
    Option,
    Select,
    Table,
    TableColumn,
    TimePicker
} from 'element-ui'

import store from './store/index.js'
import router from './router/index.js'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(Avatar.name, Avatar)
Vue.component(Button.name, Button)
Vue.component(Descriptions.name, Descriptions)
Vue.component(DescriptionsItem.name, DescriptionsItem)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Option.name, Option)
Vue.component(Select.name, Select)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(TimePicker.name, TimePicker)

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
