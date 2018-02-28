import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login.vue'
import Layout from '../view/layout.vue'
import Index from '../view/index/index.vue'
import DT from '../view/DT/index.vue'       //大数据

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect : '/system'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/DT',
            name: 'dt',
            component: DT
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
