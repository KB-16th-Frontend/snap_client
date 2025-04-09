<style scoped>
.main-container {
    padding: 2rem 1rem 6rem;
}
</style>

<template>
    <BaseLayout>
        <MainCarousel />
        <div class="d-flex flex-column gap-block w-100 main-container">
            <MainBlock />
            <PaymentsBlock />
            <CommonFooter />
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import MainBlock from '@/components/home/MainBlock.vue'
import PaymentsBlock from '@/components/home/PaymentsBlock.vue'
import CommonFooter from '@/components/layouts/CommonFooter.vue'
import MainCarousel from '@/components/home/MainCarousel.vue'
</script>
