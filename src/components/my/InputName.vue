<template>
    <div>
        <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
            이름을 입력해주세요!
        </BaseTypography>
        <label class="w-100 mt-3">
            <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100"
                >이름</BaseTypography
            >
            <input
                type="text"
                class="form-control w-100"
                placeholder="김스냅"
                :value="name"
                @input="onChange"
            />
            <BaseTypography size="sm" color="red" weight="medium">
                {{ errorMessage.length > 0 ? errorMessage : ' ' }}
            </BaseTypography>
        </label>
    </div>
</template>

<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'

defineProps({
    name: {
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
    errorMessage: {
        type: String,
        default: '',
    },
})
</script>
