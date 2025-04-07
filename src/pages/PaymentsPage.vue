<style scoped></style>

<template>
    <BaseLayout>
        <PaymentItem
            :title="payment.title"
            :category="payment.category"
            :amount="payment.amount"
            :emoji="payment.emoji"
            :transactionType="payment.transactionType"
        ></PaymentItem>
        <PaymentItem :title="payment.title" :emoji="payment.emoji"></PaymentItem>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import PaymentItem from '@/components/common/PaymentItem/PaymentItem.vue'
import { reactive } from 'vue'
const payment = reactive({
    title: 'GYMBOX (어린이대공원역점)',
    category: '카페',
    amount: 1000,
    transactionType: 'spending',
})
</script>
