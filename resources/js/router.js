import Vue from "vue";
import Router from "vue-router";
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/basic/hooks'
import methods from './components/basic/methods'

import home from './components/pages/home'


const routes = [

    {
        path: '/home',
        component: home
    }, 

    {
        path: '/test-route',
        component: firstPage
    }, 



    //Basic Routes   
    {
        path: '/test-route',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    },
    //Vue hooks
    {
        path: '/hooks',
        component: hooks
    },
    //Basic
    {
        path: '/methods',
        component: methods
    },
]

export default new Router({
    mode: 'history',
    routes
})