<template>
    <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
        수입/지출 중 하나를 선택해주세요!</BaseTypography
    >
    <div class="d-flex gap-3 mt-3 w-100">
        <button
            class="btn btn-outline-primary btn-lg w-100 d-flex justify-content-center align-items-center gap-2"
            :class="{ active: selected === 'income' }"
            @click="onClick('income')"
        >
            <i v-if="selected === 'income'" class="fa-solid fa-check"></i>
            수입
        </button>
        <button
            class="btn btn-outline-primary btn-lg w-100 d-flex justify-content-center align-items-center gap-2"
            :class="{ active: selected === 'spending' }"
            @click="onClick('spending')"
        >
            <i v-if="selected === 'spending'" class="fa-solid fa-check"></i>
            지출
        </button>
    </div>
</template>

<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'

defineProps({
    selected: {
        type: String,
        default: null,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    onClick: {
        type: Function,
        default: () => {},
        validator: (value) => {
            return typeof value === 'function'
        },
    },
})
</script>
