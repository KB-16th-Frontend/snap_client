<template>
    <section class="w-100">
        <!-- <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100"
            ><span class="text-dark">스냅</span><span class="text-secondary">.</span> 나의 하루를 더
            가치있게
        </BaseTypography>
        <BaseCard title="오늘의 등락율" toName="charts" class="mt-3">
            <BaseTypography color="dark" size="xl" weight="black" class="d-flex align-items-center"
                ><CountUp :start-val="0" :end-val="1234567" :duration="1.5" />원</BaseTypography
            >
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-chart-line fs-lg text-red"></i>
                <BaseTypography color="red" size="lg" weight="bold">(+ 1.23%)</BaseTypography>
            </div>
            <BaseTypography color="primary" size="md" class="mt-3">
                어제의 가치는 1,234,567원 이에요!
            </BaseTypography>
        </BaseCard> -->

        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100">
            <span class="text-dark">{{ user.nickname }}</span>
            <span class="text-secondary">.</span> 나의 하루를 더 가치있게
        </BaseTypography>

        <BaseCard title="오늘의 등락율" toName="charts" class="mt-3">
            <BaseTypography color="dark" size="xl" weight="black" class="d-flex align-items-center">
                <CountUp :start-val="0" :end-val="todayValue.valueScore" :duration="1.5" />원
            </BaseTypography>

            <!-- 등락율 시각화 -->
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-chart-line fs-lg" :class="changeIconClass"></i>
                <BaseTypography :color="changeColor" size="lg" weight="bold">
                    ({{ todayValue.valueChangeRate > 0 ? '+' : ''
                    }}{{ todayValue.valueChangeRate }}%)
                </BaseTypography>
            </div>

            <BaseTypography color="primary" size="md" class="mt-3">
                어제의 가치는 {{ yesterdayValue.valueScore.toLocaleString() }}원 이에요!
            </BaseTypography>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'

import CountUp from 'vue-countup-v3'
//---
import { ref, computed } from 'vue'
import axios from 'axios'

const todayValue = ref(null)
const yesterdayValue = ref(null)
const user = ref(null)
const baseUrl = 'http://localhost:3000/valueIndex?_sort=date&_order=desc&_limit=2'
const userUrl = 'http://localhost:3000/member/1'

const fetchMainData = async () => {
    const [valueRes, userRes] = await Promise.all([axios.get(baseUrl), axios.get(userUrl)])
    todayValue.value = valueRes.data[0]
    yesterdayValue.value = valueRes.data[1]
    user.value = userRes.value
}

fetchMainData()

const changeColor = computed(() => (todayValue.value?.valueChangeRate >= 0 ? 'red' : 'blue'))
const changeIconClass = computed(() =>
    todayValue.value?.valueChangeRate >= 0 ? 'text-red' : 'text-blue',
)
</script>
