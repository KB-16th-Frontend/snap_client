<style scoped></style>

<template>
    <BaseLayout class="pb-5">
        <ThisMonthSpending
            :name="user.getUserNickname"
            v-model:modelValueYear="selectedYear"
            v-model:modelValueMonth="selectedMonth"
        />
        <div class="d-flex flex-column w-100 ps-3 pe-3 pb-5" v-if="categorySpendings.length > 0">
            <SeeDetailBlock
                :income="totalIncome"
                :spending="totalSpending"
                :year="selectedYear"
                :month="selectedMonth"
            ></SeeDetailBlock>
            <SpendingReport
                :category="categorySpendings[0].name"
                :yearMonth="`${selectedYear}-${selectedMonth < 10 ? '0' + selectedMonth : selectedMonth}`"
            ></SpendingReport>
            <AddNewSpending></AddNewSpending>
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import ThisMonthSpending from '@/components/payments/ThisMonthSpending.vue'
import SeeDetailBlock from '@/components/payments/SeeDetailBlock.vue'
import SpendingReport from '@/components/payments/SpendingReport.vue'
import AddNewSpending from '@/components/payments/AddNewSpending.vue'
import { ref, onMounted, computed } from 'vue'
import { fetchIncomeTransaction, fetchSpendingTransaction } from '@/api/payments'

const income = ref([])
const spending = ref([])
const selectedYear = ref(new Date().getFullYear())
const selectedMonth = ref(new Date().getMonth() + 1)
const user = useUserStore()

const totalIncome = computed(() => {
    return filteredIncome.value.reduce((sum, item) => sum + item.amount, 0)
})

const totalSpending = computed(() => {
    return filteredSpending.value.reduce((sum, item) => sum + item.amount, 0)
})

const filteredIncome = computed(() => {
    return income.value.filter((item) => {
        const date = new Date(item.spendAt)
        return (
            date.getFullYear() === selectedYear.value && date.getMonth() + 1 === selectedMonth.value
        )
    })
})

const filteredSpending = computed(() => {
    return spending.value.filter((item) => {
        const date = new Date(item.spendAt)
        return (
            date.getFullYear() === selectedYear.value && date.getMonth() + 1 === selectedMonth.value
        )
    })
})

import { useCategoryStore } from '@/stores/categoryStore'
import useUserStore from '@/stores/auth'

const categories = useCategoryStore().categories
const categorySpendings = ref([])
onMounted(async () => {
    income.value = await fetchIncomeTransaction({
        params: {
            memberId: 1,
        },
    })
    spending.value = await fetchSpendingTransaction({
        params: {
            memberId: 1,
        },
    })

    const categoryMap = new Map()

    const sp = spending.value.filter((tx) =>
        tx.spendAt.startsWith(
            `${selectedYear.value}-${selectedMonth.value < 10 ? '0' + selectedMonth.value : selectedMonth.value}`,
        ),
    )

    sp.forEach((tx) => {
        const matched = categories.find((c) => Number(c.id) === Number(tx.categoryId))

        if (!categoryMap.has(tx.categoryId)) {
            categoryMap.set(tx.categoryId, {
                name: matched.name,
                data: tx.amount,
            })
        } else {
            categoryMap.get(tx.categoryId).data += tx.amount
        }
    })
    categorySpendings.value = Array.from(categoryMap.values()).sort((a, b) => b.data - a.data)
})
</script>
