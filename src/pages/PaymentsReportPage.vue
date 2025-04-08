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
import { usePaymentsReportStore } from '@/stores/counter'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import SpendTypeChart from '@/components/chart/SpendTypeChart.vue'
import CategoryChart from '@/components/chart/CategoryChart.vue'

const { month, totalSpending, goodSpending, badSpending, categorySpendings } =
    usePaymentsReportStore()
</script>
