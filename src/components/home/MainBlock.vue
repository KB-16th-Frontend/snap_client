<template>
    <section class="w-100">
        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100"
            ><span class="text-dark">스냅</span><span class="text-secondary">.</span> 나의 하루를 더
            가치있게
        </BaseTypography>
        <BaseCard
            title="오늘의 등락율"
            toName="charts"
            class="mt-3"
            v-if="todaysData && yesterdayData"
        >
            <BaseTypography color="dark" size="xl" weight="black" class="d-flex align-items-center"
                ><CountUp
                    :start-val="0"
                    :end-val="todaysData[0].valueScore"
                    :duration="1.5"
                />원</BaseTypography
            >
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-chart-line fs-lg text-red"></i>
                <BaseTypography color="red" size="lg" weight="bold"
                    >({{ todaysData[0].valueChangeRate > 0 ? '+' : '' }}
                    {{ todaysData[0].valueChangeRate }}%)</BaseTypography
                >
            </div>
            <BaseTypography color="primary" size="md" class="mt-3">
                어제의 가치는 {{ yesterdayData.toLocaleString() }}원 이에요!
            </BaseTypography>
        </BaseCard>
    </section>
</template>

<script setup>
import { getValueIndex } from '@/api/valueIndex'
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { onMounted, ref } from 'vue'

import CountUp from 'vue-countup-v3'

const todaysData = ref(null)
const yesterdayData = ref(null)

onMounted(async () => {
    // api 호출 완료
    const today = new Date()

    // 오늘 날짜 (yyyy-MM-dd)
    const todayString = today.toISOString().split('T')[0]

    // 어제 날짜 구하기
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)

    // API 호출
    todaysData.value = await getValueIndex({ date: todayString })
    yesterdayData.value = todaysData.value[0].yesterdayValue
})
</script>
