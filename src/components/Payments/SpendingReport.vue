<template>
    <section class="w-100 mt-4">
        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100">
            지출 분석 리포트
        </BaseTypography>
        <BaseCard title="지출 분석 리포트" class="mt-3" toName="charts">
            <BaseTypography size="lg" weight="bold" class="mt-3"
                >가장 많은 돈을 쓴 카테고리
            </BaseTypography>
            <BaseTypography size="xl" weight="black" color="dark" class="mt-3"
                >#{{ props.category }}</BaseTypography
            >
        </BaseCard>
    </section>
</template>
<script setup>
import BaseCard from '../common/Card/BaseCard.vue'
import BaseTypography from '../common/Typography/BaseTypography.vue'
import { defineProps } from 'vue'
const props = defineProps({
    category: String,
})
</script>
