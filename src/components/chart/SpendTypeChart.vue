<template>
    <BaseTypography size="lg" weight="bold" class="w-100 text-start mb-2 pb-1"
        >가치/낭비 소비</BaseTypography
    >
    <BaseCard>
        <BasePieChart :labels="SPEND_TYPES" :data="[goodSpending, badSpending]" />
        <div
            v-for="(spendType, index) in SPEND_TYPES"
            class="d-flex justify-content-between w-100 mb-2"
        >
            <BaseTypography size="md" weight="bold"> {{ spendType }}</BaseTypography>
            <BaseTypography size="md" weight="bold" color="blue">
                {{ spendings[index].toLocaleString() }}원
            </BaseTypography>
        </div>
    </BaseCard>
</template>

<script setup>
import BasePieChart from '@/components/chart/BasePieChart.vue'
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { SPEND_TYPES } from '@/common/constants'

const props = defineProps({
    goodSpending: {
        type: Number,
    },
    badSpending: {
        type: Number,
    },
})

const spendings = [props.goodSpending, props.badSpending]
</script>
