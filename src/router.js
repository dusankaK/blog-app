import Vue from 'vue'
import Router from 'vue-router'
import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/posts', name: 'home'},
        {path: '/posts', component: AppPosts, name: 'posts'},
        {path: '/posts/:id', component: SinglePost, name: 'single-post'},
        {path: '/add', component: AddPost, name: 'add-post'},
        {path: '/edit/:id', component: AddPost, name: 'edit'}

    ] 
})