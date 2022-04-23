import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import Xcity from './views/Xcity.vue'
import Xpet from './views/Xpet.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/xpet",
        name: "Xpet",
        component: Xpet
    },
    {
        path: "/xcity",
        name: "Xcity",
        component: Xcity
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes
})

export default router