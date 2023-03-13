import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import DateC from './components/DateC.vue';
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
    },
    {
        name: "DateC",
        component: DateC,
        path: "/date-c/:id",      
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;