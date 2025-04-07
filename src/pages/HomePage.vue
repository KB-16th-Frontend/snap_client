<style scoped></style>

<template>
    <BaseLayout>
        <div class="d-flex flex-column gap-block w-100">
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
</script>
