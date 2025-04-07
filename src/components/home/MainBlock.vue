<template>
    <section class="w-100">
        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100"
            ><span class="text-dark">스냅</span><span class="text-secondary">.</span> 나의 하루를 더
            가치있게
        </BaseTypography>
        <BaseCard title="오늘의 등락율" toName="charts" class="mt-3">
            <BaseTypography color="dark" size="xl" weight="black" class="d-flex align-items-center"
                ><CountUp :start-val="0" :end-val="1234567" :duration="1.5" />원</BaseTypography
            >
            <!-- TODO: 상승이냐 하락이냐에 따라 색상 다르게 -->
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-chart-line fs-lg text-red"></i>
                <BaseTypography color="red" size="lg" weight="bold">(+ 1.23%)</BaseTypography>
            </div>
            <BaseTypography color="primary" size="md" class="mt-3">
                어제의 가치는 1,234,567원 이에요!
            </BaseTypography>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'

import CountUp from 'vue-countup-v3'
</script>
