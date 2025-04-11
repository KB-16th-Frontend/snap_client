<template>
    <section class="w-100">
        <AddNewSpending />
        <BaseCard
            title="최근 지출 내역"
            toName="payments-detail"
            class="mt-3"
            :query="{
                year: year,
                month: month < 10 ? '0' + month : month,
            }"
        >
            <ul class="mt-4 d-flex flex-column gap-3">
                <PaymentItem
                    v-for="item in data"
                    :key="item.id"
                    :title="item.title"
                    :category="categoryStore.categories[Number(item.categoryId) - 1].name"
                    :amount="item.amount"
                    :emoji="categoryStore.categories[Number(item.categoryId) - 1].emoji"
                    :transactionType="item.transactionType"
                />
            </ul>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import PaymentItem from '@/components/payments/item/PaymentItem.vue'
import AddNewSpending from '../payments/AddNewSpending.vue'
import { onMounted, ref } from 'vue'
import { fetchRecentTransaction } from '@/api/payments'
import { useCategoryStore } from '@/stores/categoryStore'

const data = ref(null)
const categoryStore = useCategoryStore()

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1

onMounted(async () => {
    data.value = await fetchRecentTransaction()
})
</script>
