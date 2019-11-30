import Vue from 'vue'
import Router from 'vue-router'
import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/posts', name: 'home'},
        {path: '/posts', component: AppPosts, name: 'posts'},
        {path: '/posts/:id', component: SinglePost, name: 'single-post'}
    ] 
})