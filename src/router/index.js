import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AuthPage from '../pages/AuthPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'auth',
            component: AuthPage,
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
            path: '/payments/detail',
            name: 'payments-detail',
            component: () => import('../pages/payments/PaymentsDetailPage.vue'),
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
            name: 'payment-statistics',
            component: () => import('../pages/StatisticsPage.vue'),
        },
        {
            path: '/charts',
            name: 'charts',
            component: () => import('../pages/ChartsPage.vue'),
        },
        {
            path: '/charts/detail',
            name: 'charts-detail',
            component: () => import('../pages/ChartsDetailPage.vue'),
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: () => import('../pages/MyPage.vue'),
        },
        {
            path: '/mypage/edit/name',
            name: 'edit-member-name',
            component: () => import('../pages/my/EditMemberNamePage.vue'),
        },
        {
            path: '/:NotFound(.*)',
            component: () => import(`../pages/NotFoundPage.vue`),
        },
    ],
})

export default router
