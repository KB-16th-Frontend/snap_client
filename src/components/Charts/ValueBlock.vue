<template>
    <section class="bg-light-blue p-4 mb-3">
        <div class="d-flex justify-content-between">
            <BaseTypography size="lg" weight="bold" class="">
                {{ props.name }}님의<br />오늘 소비 가치는<br />
                <span :class="`text-${valueColor}`">{{ valueScore.toLocaleString() }}</span
                >원 입니다.
            </BaseTypography>
            <BaseTypography size="2xl">💵</BaseTypography>
        </div>
        <BaseTypography size="md" color="gray" class="mt-3"
            >오늘도 나를 위한 의미있는 소비, 멋져요!</BaseTypography
        >
    </section>
</template>
<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'
import { defineProps, computed } from 'vue'
const props = defineProps({
    name: {
        type: String,
    },
    valueScore: {
        type: Number,
    },
    valueChangeRate: {
        type: Number,
    },
})
const valueColor = computed(() => {
    if (props.valueChangeRate > 0) {
        return 'red'
    } else if (props.valueChangeRate < 0) {
        return 'blue'
    } else {
        return 'black'
    }
})
</script>
