import { createMemoryHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'

const routes = [
    { path: '/', component: ComplaintsSection },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
