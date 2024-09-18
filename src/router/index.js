import { createRouter, createWebHistory } from 'vue-router';
import LandingSections from '@/components/Contents/LandingPage/LandingSections.vue';
import HomePage from '@/components/Contents/HomePage/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingSections,
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        meta: { requiresAuth: true }, // Router guard, it requires to login successfully before directed to the HomePage, so it basically guard the home page so that users cant directly access it without logging in nor sign in
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Navugation guard for authentication
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('authToken');
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;