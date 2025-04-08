<template>
    <button class="check-btn" :class="{ selected: isSelected }" @click="onClick">
        <span class="me-2" v-if="isSelected"><i class="fa-solid fa-check" color="white"></i></span>
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    onClick: Function,
    isSelected: Boolean,
})
</script>

<style scoped>
/* 1rem = 16px*/
.check-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1.2rem;
    /* border: 1px solid #1e3050; */
    border: 1px solid var(--vt-c-primary);
    border: 1px solid;
    /* background-color: white; */
    background-color: var(--vt-c-white);
    color: var(--vt-c-primary);
    cursor: pointer;
    transition: 0.2s;
}

.check-btn.selected {
    background-color: var(--vt-c-primary);
    /* color: white; */
    color: var(--vt-c-white);
    font-weight: bold;
}
</style>
