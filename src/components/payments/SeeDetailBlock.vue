<template>
    <section class="w-100">
        <BaseTypography
            tag="h2"
            color="primary"
            size="lg"
            weight="bold"
            class="text-start w-100 mt-4"
        >
            소비 기록 상세 보기
        </BaseTypography>
        <BaseCard title="소비 기록 상세" class="mt-3" toName="payments-detail">
            <div class="d-flex mt-3">
                <BaseTypography size="lg" weight="bold" class="me-1"
                    >총 수입 : <span class="text-red">{{ props.income.toLocaleString() }}</span
                    >원</BaseTypography
                >
            </div>
            <div class="d-flex">
                <BaseTypography size="lg" weight="bold" class="me-1"
                    >총 지출 : <span class="text-blue">{{ props.spending.toLocaleString() }}</span
                    >원</BaseTypography
                >
            </div>
        </BaseCard>
    </section>
</template>
<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '../common/Typography/BaseTypography.vue'
import { defineProps } from 'vue'
const props = defineProps({
    income: {
        type: Number,
    },
    spending: {
        type: Number,
    },
})
</script>
