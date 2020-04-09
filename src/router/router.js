import Vue from 'vue';
import Router from 'vue-router';
import RouterFile from '@/file/Router.md'; 

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
        },
        {
            path: '/router',
            name: 'Router',
            component: RouterFile,
          },

    ]
})