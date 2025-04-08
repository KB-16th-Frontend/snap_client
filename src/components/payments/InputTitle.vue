<template>
    <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
        어떤 {{ selected === 'income' ? '수입' : '지출' }}이 이뤄졌나요?
    </BaseTypography>
    <label class="w-100 mt-3">
        <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100"
            >{{ selected === 'income' ? '수입' : '지출' }}이름</BaseTypography
        >
        <input
            type="text"
            class="form-control w-100"
            placeholder="이름을 입력해주세요"
            :value="title"
        />
    </label>
</template>

<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'

defineProps({
    selected: {
        type: String,
        required: true,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    title: {
        type: String,
        default: '',
    },

    onChange: {
        type: Function,
        default: () => {},
        validator: (value) => {
            return typeof value === 'function'
        },
    },
})
</script>
