<template>
    <DetailLayout class="pb-5" :onBack="onBack">
        <div class="d-flex gap-3 mt-4 ps-3">
            <button
                v-for="option in ['week', 'month', 'all']"
                :key="option"
                class="btn rounded-pill fs-sm fw-bold"
                :class="range === option ? 'btn-primary' : 'btn-outline-primary'"
                @click="range = option"
            >
                <i v-if="range === option" class="fa-solid fa-check"></i>
                {{ option === 'week' ? '일주일' : option === 'month' ? '한달' : '전체' }}
            </button>
        </div>
        <BaseTypography color="primary" weight="bold" size="lg" class="p-3"
            >차트 상세 보기</BaseTypography
        >
        <LineChart :selectedRange="range" :key="range"></LineChart>
    </DetailLayout>
</template>
<script setup>
import DetailLayout from '@/components/layouts/DetailLayout.vue'
import LineChart from '@/components/chart/LineChart.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const range = ref('week')
const onBack = () => {
    router.back()
}
</script>
