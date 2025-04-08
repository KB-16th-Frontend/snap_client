<template>
    <BaseTypography size="lg" weight="bold" class="w-100 text-start mb-2 pb-1"
        >가치/낭비 소비</BaseTypography
    >
    <BaseCard>
        <BasePieChart :labels="['가치 소비', '낭비 소비']" :data="[goodSpending, badSpending]" />
        <div class="d-flex justify-content-between w-100 mb-2">
            <BaseTypography size="md" weight="bold"> 가치 소비 </BaseTypography>
            <BaseTypography size="md" weight="bold" color="blue">
                {{ goodSpending.toLocaleString() }}원
            </BaseTypography>
        </div>
        <div class="d-flex justify-content-between w-100 mb-2">
            <BaseTypography size="md" weight="bold"> 낭비 소비 </BaseTypography>
            <BaseTypography size="md" weight="bold" color="red">
                {{ badSpending.toLocaleString() }}원
            </BaseTypography>
        </div>
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
