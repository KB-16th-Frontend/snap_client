<template>
    <BaseTypography size="lg" weight="bold" color="primary" class="text-start mx-3 mt-4"
        >가치/낭비 소비</BaseTypography
    >
    <div class="d-flex justify-content-center">
        <BaseCard class="my-3 mx-3">
            <BasePieChart :labels="SPEND_TYPES" :data="spendings" />
            <div v-for="(spendType, index) in SPEND_TYPES" :key="index">
                <BaseTypography size="md" weight="bold" class="d-flex justify-content-between p-2">
                    {{ spendType.title }}
                    <span :class="spendType.textColor">
                        {{ spendings[index].toLocaleString() }}
                        <span class="text-black">원</span>
                    </span>
                </BaseTypography>
            </div>
        </BaseCard>
    </div>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import BasePieChart from './BasePieChart.vue'
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
