<template>
    <div>
        <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
            이제 마지막이에요!
        </BaseTypography>
        <label class="w-100 mt-3">
            <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100"
                >상세 설명 (선택 사항)</BaseTypography
            >
            <textarea
                type="text"
                class="form-control w-100"
                placeholder="최대 20자까지 기록이 가능해요!"
                :value="description"
                @input="onChange"
            >
            </textarea>
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
    description: {
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
