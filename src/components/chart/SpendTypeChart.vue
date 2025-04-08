<template>
    <BaseTypography size="lg" weight="bold" class="w-100 text-start mb-2 pb-1"
        >가치/낭비 소비</BaseTypography
    >
    <BaseCard>
        <BasePieChart :labels="['가치 소비', '낭비 소비']" :data="[goodSpending, badSpending]" />
        <BaseTypography size="md" weight="bold" class="d-flex justify-content-between w-100 mb-2">
            <span>가치 소비</span>
            <span>{{ goodSpending.toLocaleString() }}원</span>
        </BaseTypography>
        <BaseTypography size="md" weight="bold" class="d-flex justify-content-between w-100">
            <span>낭비 소비</span>
            <span>{{ badSpending.toLocaleString() }}원</span>
        </BaseTypography>
    </BaseCard>
</template>

<script setup>
import BasePieChart from '@/components/chart/BasePieChart.vue'
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'

const props = defineProps({
    goodSpending: {
        type: Number,
    },
    badSpending: {
        type: Number,
    },
})
</script>
