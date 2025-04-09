<template>
    <div>
        <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
            언제 {{ transactionType === 'income' ? '돈이 들어왔나요?' : '소비하셨나요?' }}
        </BaseTypography>
        <label class="w-100 mt-3">
            <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100"
                >{{ transactionType === 'income' ? '입금' : '소비' }} 날짜</BaseTypography
            >
            <input type="date" class="form-control w-100" :value="date" @input="onChange" />
            <BaseTypography size="sm" color="red" weight="medium">
                {{ errorMessage.length > 0 ? errorMessage : ' ' }}
            </BaseTypography>
        </label>
    </div>
</template>

<script setup>
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'

defineProps({
    transactionType: {
        type: String,
        required: true,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    date: {
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
    guideMessage: {
        type: String,
        default: '',
    },
    errorMessage: {
        type: String,
        default: '',
    },
})
</script>
