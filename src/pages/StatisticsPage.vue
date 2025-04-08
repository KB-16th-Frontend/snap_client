<style scoped></style>

<template>
    <BaseLayout>
        <section class="w-100 pb-2 bg-light-blue">
            <BaseTypography size="lg" weight="bold" class="w-100 text-start mx-3 mb-1 pt-5"
                >{{ month }}월 지출</BaseTypography
            >
            <BaseTypography color="dark" size="xl" weight="black" class="text-start m-3"
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

const month = ref(parseInt(yearMonth.value.split('-')[1]))
// const totalSpending = ref(0)
// const goodSpending = ref(0)
// const badSpending = ref(0)
// const categorySpendings = ref([])

const statisticsData = fetchStatistics({
    yearMonth: yearMonth.value,
    memberId: memberId.value,
})

onMounted(() => {
    // totalSpending.value = statisticsData.totalSpending
    // goodSpending.value = statisticsData.goodSpending
    // badSpending.value = statisticsData.badSpending
    // categorySpendings.value = statisticsData.categorySpendings
})

// 테스트용 데이터
const totalSpending = ref(100000)
const goodSpending = ref(80000)
const badSpending = ref(20000)
const categorySpendings = ref([
    { label: '식비', data: 30000 },
    { label: '교통비', data: 20000 },
    { label: '문화생활', data: 10000 },
    { label: '의류', data: 5000 },
    { label: '기타', data: 2000 },
])
</script>
