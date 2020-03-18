import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path:'/HelloWorld',
            component: resolve => require(['../components/HelloWorld.vue'], resolve),
        },
        {
            path:'/home',
            component: resolve => require(['../components/view/Home.vue'], resolve),
        }

    ]
})