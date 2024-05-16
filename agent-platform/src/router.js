import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Description from './components/Description.vue'
import Solutions from './components/Solutions.vue'
import Questions from './components/Questions.vue'

const routes = [
    { path: '/', component: ComplaintsSection },
    { path: '/description', component: Description, name: "Description" },
    { path: '/solutions', component: Solutions, name: "Solutions" },
    { path: '/questions', component: Questions, name: "Questions" }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
