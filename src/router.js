import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import {firebaseApp}  from './firebase'
import AddJob from './components/AddJob.vue'
import ErrorPage from './components/ErrorPage.vue'
import History from './components/History.vue'
import Profile from './components/Profile.vue'
import SignUp from './components/SignUp.vue'

Vue.use(Router)

let router =  new Router({
    routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/addjob',
        name: 'AddJob',
        component: AddJob,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        name: 'ErrorPage',
        component: ErrorPage
    }
]

})


//NavGuards
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(!firebaseApp.auth().currentUser){
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        else{
            next()
        }
    }
    else if(to.matched.some(record =>record.meta.requiresGuest)){
        if(firebaseApp.auth().currentUser){
            next({
                path: '/dashboard',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        else{
            next()
        }
    }
    else{
        next()
    }
})


export default router
