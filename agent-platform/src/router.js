import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Description from './components/Description.vue'
import Questions from './components/Questions.vue'

const routes = [
    { path: '/', component: ComplaintsSection },
    { path: '/description', component: Description, name: "Description" },
    { path: '/questions', name: "Questions", component: Questions }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
