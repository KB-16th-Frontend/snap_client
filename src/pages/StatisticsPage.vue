<style scoped></style>

<template>
    <DetailLayout>
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
import { useRoute } from 'vue-router'

import DetailLayout from '@/components/layouts/DetailLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import BaseCard from '@/components/common/Card/BaseCard.vue'
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
    { title: '식비', data: 30000, emoji: '🍽' },
    { title: '교통', data: 20000, emoji: '🚗' },
    { title: '취미/여가', data: 10000, emoji: '🎟' },
    { title: '쇼핑', data: 5000, emoji: '🛍' },
    { title: '기타', data: 2000, emoji: '#️⃣' },
])
</script>
