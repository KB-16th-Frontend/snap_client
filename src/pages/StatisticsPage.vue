<style scoped></style>

<template>
    <DetailLayout :onBack="onClickBack">
        <section class="w-100 pb-2 bg-light-blue">
            <BaseTypography size="lg" weight="bold" class="w-100 text-start px-3 pt-5 pb-3"
                >{{ month }}월 지출</BaseTypography
            >
            <BaseTypography color="dark" size="xl" weight="black" class="text-start px-3"
                >{{ totalSpending.toLocaleString() }}원</BaseTypography
            >
        </section>
        <section class="px-3 py-4">
            <div v-if="totalSpending === 0">
                <BaseCard class="mt-4">
                    <BaseTypography
                        size="lg"
                        weight="bold"
                        class="d-flex justify-content-center mx-3 mt-4"
                        >아직 입력한 지출이 없어요!</BaseTypography
                    >
                    <BaseTypography size="2xl" class="text-center py-3">😢</BaseTypography>
                    <router-link class="btn btn-primary mt-3 fw-bold" to="/payments">
                        수입 및 지출 추가하기
                    </router-link>
                </BaseCard>
            </div>
            <div v-else>
                <SpendTypeChart
                    :goodSpending="goodSpending"
                    :badSpending="badSpending"
                ></SpendTypeChart>
                <CategoryChart :categorySpendings="categorySpendings"></CategoryChart>
            </div>
        </section>
    </DetailLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/categoryStore'

import DetailLayout from '@/components/layouts/DetailLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import BaseCard from '@/components/common/Card/BaseCard.vue'
import SpendTypeChart from '@/components/chart/SpendTypeChart.vue'
import CategoryChart from '@/components/chart/CategoryChart.vue'
import { fetchSpendingTransaction } from '@/api/payments'
import { useAuthGuard } from '@/hooks/useAuthGuard'

const router = useRouter()
const route = useRoute()
const categories = useCategoryStore().categories

const yearMonth = ref(route.query.yearMonth) // YYYY-MM
const memberId = ref(Number(route.query.memberId))

const month = ref(parseInt(yearMonth.value.split('-')[1]))
const totalSpending = ref(0)
const goodSpending = ref(0)
const badSpending = ref(0)
const categorySpendings = ref([])
const categoryMap = new Map()

const transactions = ref([])

fetchSpendingTransaction({ memberId: memberId.value }).then((data) => {
    transactions.value = data.filter((tx) => tx.spendAt.startsWith(yearMonth.value))

    transactions.value.forEach((tx) => {
        totalSpending.value += tx.amount

        if (tx.spendType === 'goodSpending') {
            goodSpending.value += tx.amount
        } else if (tx.spendType === 'badSpending') {
            badSpending.value += tx.amount
        }

        const matched = categories.find((c) => Number(c.id) === Number(tx.categoryId))

        if (!categoryMap.has(tx.categoryId)) {
            categoryMap.set(tx.categoryId, {
                title: matched.name,
                emoji: matched.emoji,
                data: tx.amount,
            })
        } else {
            categoryMap.get(tx.categoryId).data += tx.amount
        }
    })
    categorySpendings.value = Array.from(categoryMap.values()).sort((a, b) => b.data - a.data)
})

const onClickBack = () => {
    router.back()
}

onMounted(async () => {
    await useAuthGuard()
})
</script>
