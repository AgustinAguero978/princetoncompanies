import { createRouter, createWebHistory  } from "vue-router"

const routes = [
    {path:'', name: 'home', component: () => import('@/views/Home.vue')},
    {path:'/about', name: 'about', component: () => import('@/views/About.vue')},
    {path:'/contact', name: 'contact', component: () => import('@/views/Contact.vue')},

    {path:'/design', name: 'design', component: () => import('@/views/Companies/Design/Design.vue')},
    {path:'/design/firstProject', name: 'firstProjectDesign', component: () => import('@/views/Companies/Design/Projects/FirstProject.vue')},
    {path:'/design/secondProject', name: 'secondProjectDesign', component: () => import('@/views/Companies/Design/Projects/SecondProject.vue')},
    {path:'/design/thirdProject', name: 'thirdProjectDesign', component: () => import('@/views/Companies/Design/Projects/ThirdProject.vue')},
    {path:'/design/fourthProject', name: 'fourthProjectDesign', component: () => import('@/views/Companies/Design/Projects/FourthProject.vue')},

    {path:'/builder', name: 'builder', component: () => import('@/views/Companies/Builder/Builder.vue')},
    {path:'/builder/firstProject', name: 'firstProjectBuilder', component: () => import('@/views/Companies/Builder/Projects/FirstProject.vue')},
    {path:'/builder/secondProject', name: 'secondProjectBuilder', component: () => import('@/views/Companies/Builder/Projects/SecondProject.vue')},
    {path:'/builder/thirdProject', name: 'thirdProjectBuilder', component: () => import('@/views/Companies/Builder/Projects/ThirdProject.vue')},
    {path:'/builder/fourthProject', name: 'fourthProjectBuilder', component: () => import('@/views/Companies/Builder/Projects/FourthProject.vue')},

    {path:'/development', name: 'development', component: () => import('@/views/Companies/Development/Development.vue')},
    {path:'/development/firstProject', name: 'firstProjectDevelopment', component: () => import('@/views/Companies/Development/Projects/FirstProject.vue')},
    {path:'/development/secondProject', name: 'secondProjectDevelopment', component: () => import('@/views/Companies/Development/Projects/SecondProject.vue')},
    {path:'/development/thirdProject', name: 'thirdProjectDevelopment', component: () => import('@/views/Companies/Development/Projects/ThirdProject.vue')},
    {path:'/development/fourthProject', name: 'fourthProjectDevelopment', component: () => import('@/views/Companies/Development/Projects/FourthProject.vue')},


    {path:'/visualization', name: 'visualization', component: () => import('@/views/Companies/Visualization/Visualization.vue')},
    {path:'/visualization/firstProject', name: 'firstProjectVisualization', component: () => import('@/views/Companies/Visualization/Projects/FirstProject.vue')},
    {path:'/visualization/secondProject', name: 'secondProjectVisualization', component: () => import('@/views/Companies/Visualization/Projects/SecondProject.vue')},
    {path:'/visualization/thirdProject', name: 'thirdProjectVisualization', component: () => import('@/views/Companies/Visualization/Projects/ThirdProject.vue')},
    {path:'/visualization/fourthProject', name: 'fourthProjectVisualization', component: () => import('@/views/Companies/Visualization/Projects/FourthProject.vue')},


]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
    },
});

export default router