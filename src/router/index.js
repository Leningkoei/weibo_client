import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [ {
        name: 'login',
        path: '/login',
        component: Login
    }, {
        name: 'main',
        path: '/main',
        component: Main
    } ]
})

router.afterEach((to) => {
    document.title = to.name
})

export default router
