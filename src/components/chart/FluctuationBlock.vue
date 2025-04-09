<template>
    <BaseTypography size="lg" weight="bold" color="primary">소비를 종합한 등락율</BaseTypography>
    <BaseCard class="mt-3">
        <BaseTypography size="md" color="gray" weight="bold">오늘의 등락율</BaseTypography>
        <BaseTypography class="pt-2" size="lg" :color="valueColor" weight="bold">
            <i class="fa-solid fa-chart-line fs-lg"></i> {{ props.valueScore.toLocaleString() }}원
            ({{ props.valueChangeRate > 0 ? '+' : '' }}{{ props.valueChangeRate }}%)</BaseTypography
        >
        <BaseTypography class="pt-2" size="md" color="primary" weight="medium">{{
            getRandomComment(props.valueChangeRate)
        }}</BaseTypography>
        <LineChart class="mt-2" :valueChangeRate="valueChangeRate"></LineChart>
        <router-link class="btn btn-primary mt-3 fw-bold" to="/charts/detail">
            차트 상세보기
        </router-link>
    </BaseCard>
</template>
<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'
import BaseCard from '../common/Card/BaseCard.vue'
import LineChart from './LineChart.vue'
import { defineProps, computed } from 'vue'
import { getRandomComment } from '@/utils/common'

const props = defineProps({
    valueScore: {
        type: Number,
    },
    valueChangeRate: {
        type: Number,
    },
})

const valueColor = computed(() => {
    if (props.valueChangeRate > 0) {
        return 'red'
    } else if (props.valueChangeRate < 0) {
        return 'blue'
    } else {
        return 'black'
    }
})
</script>
