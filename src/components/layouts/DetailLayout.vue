<style scoped>
.container {
    max-width: 768px !important;
    min-height: 100vh;
    padding: 0;
    position: relative;
}
</style>
<template>
    <div class="container bg-gray-1">
        <DetailHeader :onBack="onBack">
            <slot name="header"></slot>
        </DetailHeader>

        <slot></slot>
    </div>
</template>

<script setup>
import DetailHeader from './DetailHeader.vue'

defineProps({
    onBack: {
        type: Function,
        default: () => {},
        validator: (value) => {
            return typeof value === 'function'
        },
    },
})
</script>
