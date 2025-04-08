<template>
    <div>
        <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
            얼마{{ transactionType === 'income' ? '가 추가되었' : '를 소비하셨' }}나요?
        </BaseTypography>
        <label class="w-100 mt-3">
            <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100"
                >{{ transactionType === 'income' ? '수입' : '지출' }} 금액</BaseTypography
            >
            <input
                type="number"
                class="form-control w-100"
                :placeholder="
                    transactionType === 'income'
                        ? '소비 금액을 숫자로 입력해주세요'
                        : '지출 금액을 숫자로 입력해주세요'
                "
                :value="amount"
                @input="onChange"
            />
            <BaseTypography size="sm" color="blue" weight="medium">
                {{ guideMessage.length > 0 ? guideMessage : ' ' }}
            </BaseTypography>
            <BaseTypography size="sm" color="red" weight="medium">
                {{ errorMessage.length > 0 ? errorMessage : ' ' }}
            </BaseTypography>
        </label>
    </div>
</template>

<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'

defineProps({
    transactionType: {
        type: String,
        required: true,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    amount: {
        type: Number,
        default: 0,
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
