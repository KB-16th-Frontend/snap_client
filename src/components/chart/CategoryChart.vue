<template>
    <BaseTypography size="lg" weight="bold" color="primary" class="text-start mx-3 pb-1 mt-4"
        >카테고리별 지출</BaseTypography
    >
    <div class="d-flex justify-content-center">
        <BaseCard class="my-2 mx-3">
            <BasePieChart :labels="lables" :data="data" />
        </BaseCard>
    </div>
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
