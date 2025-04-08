<style scoped></style>

<template>
    <BaseLayout>
        <section class="w-100 pb-3">
            <!-- 컴포넌트 레이아웃 변경 후 bg-light-blue 배경 색 추가-->
            <BaseTypography size="lg" weight="bold" class="w-100 text-start mb-2"
                >4월 지출</BaseTypography
            >
            <BaseTypography color="dark" size="xl" weight="bold" class="text-start mb-1"
                >123,123원</BaseTypography
            >
        </section>

        <BaseTypography size="lg" weight="bold" class="w-100 text-start mb-2 pb-1"
            >가치/낭비 소비</BaseTypography
        >
        <BaseCard>
            <PieChart :labels="['가치 소비', '낭비 소비']" :data="[70, 30]" />
            <BaseTypography
                size="md"
                weight="bold"
                class="d-flex justify-content-between w-100 mb-2"
            >
                <span>가치 소비</span>
                <span>123,456원</span>
            </BaseTypography>
            <BaseTypography size="md" weight="bold" class="d-flex justify-content-between w-100">
                <span>낭비 소비</span>
                <span>123,456원</span>
            </BaseTypography>
        </BaseCard>
        <BaseTypography size="lg" weight="bold" class="w-100 text-start mt-4 mb-3"
            >카테고리별 지출</BaseTypography
        >
        <BaseCard>
            <PieChart :labels="['식비', '카페', '교육', '미용']" :data="[70, 30, 20, 10]" />
            <PaymentItem></PaymentItem>
        </BaseCard>
    </BaseLayout>
</template>

<script setup>
import PieChart from '@/components/chart/basePieChart.vue'
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import PaymentItem from '@/components/common/PaymentItem/PaymentItem.vue'
</script>
