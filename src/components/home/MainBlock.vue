<template>
    <section class="w-100">
        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100"
            ><span class="text-dark">스냅</span><span class="text-secondary">.</span> 나의 하루를 더
            가치있게
        </BaseTypography>
        <BaseCard title="오늘의 등락율" toName="charts" class="mt-3">
            <BaseTypography color="dark" size="xl" weight="black" class="d-flex align-items-center"
                ><CountUp
                    :start-val="0"
                    :end-val="todayData.valueScore"
                    :duration="1.5"
                />원</BaseTypography
            >
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-chart-line fs-lg" :class="changeIconClass"></i>
                <BaseTypography :color="changeColor" size="lg" weight="bold">
                    ({{ todayData.valueChangeRate > 0 ? '+' : '' }}{{ todayData.valueChangeRate }}%)
                </BaseTypography>
            </div>
            <BaseTypography color="primary" size="md" class="mt-3">
                어제의 가치는 {{ yesterdayData?.valueScore?.toLocaleString?.() || '0' }}원 이에요!
            </BaseTypography>
        </BaseCard>

       
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import CountUp from 'vue-countup-v3'
import { getValueIndex } from '@/api/valueIndex'

const todayData = ref({})
const yesterdayData = ref({})

const fetchValueData = async () => {
    const { todayValue: today, yesterdayValue: yesterday } = await getValueIndex()
    todayData.value = yesterday
    yesterdayData.value = today
    console.log(todayData.value.valueScore)
}
onMounted(() => {
    fetchValueData()
})

const changeColor = computed(() => {
  const rate = todayData.value?.valueChangeRate
  return rate >= 0 ? 'red' : 'blue'
})

const changeIconClass = computed(() => {
  const rate = todayData.value?.valueChangeRate
  return rate >= 0 ? 'text-red' : 'text-blue'
})
</script>
