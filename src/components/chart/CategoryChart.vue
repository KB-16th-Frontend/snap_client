<template>
    <BaseTypography size="lg" weight="bold" class="w-100 text-start mt-4 mb-3"
        >카테고리별 지출</BaseTypography
    >
    <BaseCard>
        <BasePieChart :labels="lables" :data="data" />
    </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import BasePieChart from '@/components/chart/BasePieChart.vue'

const props = defineProps({
    categorySpendings: {
        type: Array,
    },
})
const lables = props.categorySpendings.map((item) => item.label)
const data = props.categorySpendings.map((item) => Number(item.data))
</script>
