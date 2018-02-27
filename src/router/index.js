import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login.vue'
import Layout from '../view/layout.vue'
import Index from '../view/index/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/system',
            component: Layout,
            children : [
                {
                    path: '/',
                    component: Index,
                }
            ]
        }
    ]
})
