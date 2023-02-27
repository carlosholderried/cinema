import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import DataR from './components/DataR.vue';


const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'DataR',
        component: DataR,
        path: '/data-r/:filme'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;