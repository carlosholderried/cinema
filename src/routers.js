import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import DataC from './components/DataC.vue';
import SecaoC from './components/SecaoC.vue';


const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/",
    },
    {
        name: "DataC",
        component: DataC,
        path: "/data-c/:id",      
    },
    {
        name: "SecaoC",
        component: SecaoC,
        path: "/secao-c/:filmeId/:data",      
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;