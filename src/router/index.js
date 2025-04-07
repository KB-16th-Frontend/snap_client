import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/payments',
            name: 'payments',
            component: () => import('../pages/PaymentsPage.vue'),
        },
        {
            path: '/charts',
            name: 'charts',
            component: () => import('../pages/ChartsPage.vue'),
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: () => import('../pages/MyPage.vue'),
        },
    ],
})

export default router
