<style scoped>
.container {
    max-width: 768px !important;
    border: 1px solid #000;
    min-height: 100vh;
    padding: 0;
    position: relative;
}
main {
    padding: 2rem 1rem 6rem;
}
</style>
<template>
    <div class="container bg-gray-1">
        <CommonHeader />
        <main class="d-flex align-items-center flex-column gap-main">
            <i class="fa-solid fa-house-chimney"></i>
            <i class="fa-solid fa-credit-card"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <i class="fa-solid fa-user"></i>
            <slot></slot>
            <CommonFooter />
        </main>
        <CommonNav />
    </div>
</template>

<script setup>
import CommonHeader from '@/components/layouts/CommonHeader.vue'
import CommonNav from './CommonNav.vue'
import CommonFooter from '@/components/layouts/CommonFooter.vue'
</script>
