import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Description from './components/Description.vue'
import Solutions from './components/Solutions.vue'

const routes = [
    { path: '/', component: ComplaintsSection },
    { path: '/description', component: Description },
    { path: '/solutions', component: Solutions }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
