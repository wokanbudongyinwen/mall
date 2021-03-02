import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login  = () => import('../page/login');
const manage  = () => import('../page/manage');
const home  = () => import('../page/home');

const routes = [
    {
        path: '/',
        component: login,
        meta: [],
    },
    {
        path: '/manage',
        component: manage,
        meta: [],
        children:[
            {
                path:'',
                component:home,
            }
        ]
    }
];

export default new Router({
    routes,
})