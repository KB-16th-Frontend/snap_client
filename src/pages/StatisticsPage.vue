<style scoped></style>

<template>
    <BaseLayout>
        <section class="w-100 pb-3">
            <!-- 베이스 레이아웃 변경 후 bg-light-blue 배경 색 추가-->
            <BaseTypography size="lg" weight="bold" class="w-100 text-start mb-2"
                >{{ month }}월 지출</BaseTypography
            >
            <BaseTypography color="dark" size="xl" weight="bold" class="text-start mb-1"
                >{{ totalSpending.toLocaleString() }}원</BaseTypography
            >
        </section>
        <SpendTypeChart :goodSpending="goodSpending" :badSpending="badSpending"></SpendTypeChart>
        <CategoryChart :categorySpendings="categorySpendings"></CategoryChart>
    </BaseLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import SpendTypeChart from '@/components/chart/SpendTypeChart.vue'
import CategoryChart from '@/components/chart/CategoryChart.vue'
import { fetchStatistics } from '@/api/payments'

const route = useRoute()
const yearMonth = ref(route.query.yearMonth)
const memberId = ref(Number(route.query.memberId))

const month = ref(yearMonth.value.split('-')[1])
const totalSpending = ref(0)
const goodSpending = ref(0)
const badSpending = ref(0)
const categorySpendings = ref([])

const statisticsData = fetchStatistics({
    yearMonth: yearMonth.value,
    memberId: memberId.value,
})

onMounted(() => {
    totalSpending.value = statisticsData.totalSpending
    goodSpending.value = statisticsData.goodSpending
    badSpending.value = statisticsData.badSpending
    categorySpendings.value = statisticsData.categorySpendings
})
</script>
