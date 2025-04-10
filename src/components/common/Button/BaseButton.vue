<!-- 일반 컴포넌트를 작성할 때에는 아래 양식에 맞추어 만들어 주세요. -->

<style scoped>
button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    margin-right: 10px;
}

/* 버튼 */
.btn-primary {
    background-color: #3b82f6;
    color: white;
    border: none;
}

.btn-outline {
    background: none;
    border: 2px solid #3b82f6;
    color: #3b82f6;
}

.btn-pill {
    background-color: #10b981;
    color: white;
    border-radius: 50%;
    border: none;
}
</style>

<template>
    <button :class="buttonClass">
        <slot>Button</slot>
    </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
    },
})

const buttonClass = computed(() => {
    return {
        'btn-primary': props.variant === 'primary',
        'btn-outline': props.variant === 'outline',
        'btn-pill': props.variant === 'pill',
    }
})
</script>
