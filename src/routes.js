import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import BlackJack from "./components/BlackJack.vue";
import About from "./components/About.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/BlackJack", component: BlackJack },
        { path: "/About", component: About },
    ]
});
export default router;