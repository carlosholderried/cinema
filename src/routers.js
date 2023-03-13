import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import NewSessions from './components/NewSessions';

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/",
    },
    {
        name: "NewSessions",
        component: NewSessions,
        path: "/new-sessions/:id",      
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;