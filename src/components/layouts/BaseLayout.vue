<style scoped>
.container {
    max-width: 768px !important;
    /* TODO: 개발 이후 border 삭제 */
    border: 1px solid #000;
    min-height: 100vh;
    padding: 0;
    position: relative;
}
</style>

<template>
    <main class="container bg-gray-1">
        <CommonHeader />
        <slot></slot>
        <CommonNav />
    </main>
</template>

<script setup>
import CommonHeader from '@/components/layouts/CommonHeader.vue'
import CommonNav from './CommonNav.vue'
</script>
