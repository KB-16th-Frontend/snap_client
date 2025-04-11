<style scoped>
.container {
    max-width: 768px !important;
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
