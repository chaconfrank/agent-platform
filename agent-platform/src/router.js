import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Description from './components/Description.vue'

const routes = [
    { path: '/', component: ComplaintsSection },
    { path: '/description', component: Description }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
