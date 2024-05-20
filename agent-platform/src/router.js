import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Description from './components/Description.vue'
import Questions from './components/Questions.vue'
import Solutions from './components/Solutions.vue'

const routes = [
    { path: '/', component: ComplaintsSection },
    { path: '/description', component: Description, name: "Description" },
    { path: '/questions', name: "Questions", component: Questions },
    { path: '/solutions', name: "Solutions", component: Solutions, props: route => ({ dato: route.query.dato }) }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
