<template>
    <div>
        <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
            가치 소비였나요 낭비 소비였나요?</BaseTypography
        >
        <div class="d-flex gap-3 mt-3 w-100">
            <button
                class="btn btn-outline-primary btn-lg w-100 d-flex justify-content-center align-items-center gap-2"
                :class="{ active: spendType === 'goodSpending' }"
                @click="onClick('goodSpending')"
            >
                <i v-if="spendType === 'goodSpending'" class="fa-solid fa-check"></i>
                가치 소비
            </button>
            <button
                class="btn btn-outline-primary btn-lg w-100 d-flex justify-content-center align-items-center gap-2"
                :class="{ active: spendType === 'badSpending' }"
                @click="onClick('badSpending')"
            >
                <i v-if="spendType === 'badSpending'" class="fa-solid fa-check"></i>
                낭비 소비
            </button>
        </div>
    </div>
</template>

<script setup>
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'

defineProps({
    spendType: {
        type: String,
        default: null,
        validator: (value) => {
            return ['goodSpending', 'badSpending'].includes(value)
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
