<template>
    <section class="w-100">
        <AddNewSpending />
        <BaseCard title="최근 지출 내역" toName="payments-detail" class="mt-3">
            <!-- TODO: 이모지 리스트 아이템 추가 -->
            <ul class="mt-4 d-flex flex-column gap-3">
                <!-- <PaymentItem
                    title="테스트"
                    category="식비"
                    :amount="10000"
                    emoji="🍔"
                    transactionType="spending"
                />
                <PaymentItem
                    title="테스트"
                    category="식비"
                    :amount="10000"
                    emoji="🍔"
                    transactionType="spending"
                />
                <PaymentItem
                    title="테스트"
                    category="식비"
                    :amount="10000"
                    emoji="🍔"
                    transactionType="spending"
                /> -->
                <PaymentItem
                    v-for="payment in payments"
                    :key="payment.id"
                    :title="payment.title"
                    :amount="payment.amount"
                    :category="getCategoryName(payment.categoryId)"
                    :emoji="getEmoji(payment.categoryId)"
                    :transactionType="getTransactionName(payment.categoryId)"
                />
            </ul>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import PaymentItem from '@/components/payments/item/PaymentItem.vue'
import AddNewSpending from '../payments/AddNewSpending.vue'
//---
import { ref } from 'vue'
import axios from 'axios'

const payments = ref([])
const categories = ref([])

const catForEmoij = ref({})

const transactionUrl = 'http://localhost:3000/transaction?_sort=spendAt&_order=desc&_limit=3'
const categoryUrl = 'http://localhost:3000/categories'

const fetchData = async () => {
    const [trxRes, catRes] = await Promise.all([axios.get(transactionUrl), axios.get(categoryUrl)])
    payments.value = trxRes.data
    categories.value = catRes.data

    catForEmoij.value = categories.value.reduce((acc, cur) => {
    acc[cur.id] = {
      name: cur.name,
      emoji: cur.emoji,
      transactionType: cur.transactionType ,
    }
        return acc
    }, {})
}

fetchData()

const getEmoji = (categoryId) => {
    return catForEmoij.value[categoryId?.emoji || '❓']
}
const getTransactionName = (categoryId) => {
    return catForEmoij.value[categoryId]?.transactionType || '-'
}

const getCategoryName = (categoryId) => {
    return catForEmoij.value[categoryId]?.name || '기타'
}
</script>
