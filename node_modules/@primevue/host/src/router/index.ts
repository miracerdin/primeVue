import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
