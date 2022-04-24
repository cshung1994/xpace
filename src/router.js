import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import Xcity from './views/Xcity.vue'
import Xpet from './views/Xpet.vue'
import Xpadao from './views/Xpadao.vue'

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
    },
    {
        path: "/xpadao",
        name: "Xpadao",
        component: Xpadao
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes
})

export default router