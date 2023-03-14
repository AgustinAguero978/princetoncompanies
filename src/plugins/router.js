import { createRouter, createWebHistory  } from "vue-router"

const routes = [
    {path:'', name: 'home', component: () => import('@/views/Home.vue')},
    {path:'/about', name: 'about', component: () => import('@/views/About.vue')},
    {path:'/design', name: 'design', component: () => import('@/views/Company.vue')},
    {path:'/project', name: 'project', component: () => import('@/views/Project.vue')},

]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router