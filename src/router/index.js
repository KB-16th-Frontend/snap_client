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
            component: () => import('../pages/payments/PaymentsPage.vue'),
        },
        {
            path: '/payments/add',
            name: 'add-payment',
            component: () => import('../pages/payments/EditPaymentsPage.vue'),
        },
        {
            path: '/payments/edit/:id',
            name: 'edit-payment',
            component: () => import('../pages/payments/EditPaymentsPage.vue'),
        },
        {
            path: '/payments/statistics',
            name: 'statistics',
            component: () => import('../pages/StatisticsPage.vue'),
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
        {
            path: '/:NotFound(.*)',
            component: ()=>import(`../pages/NotFoundPage.vue`),
        },
    ],
})

export default router
