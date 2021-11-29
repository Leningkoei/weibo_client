import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'

export default new VueRouter({
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'main',
            path: '/main',
            component: Main
        }
    ]
})
