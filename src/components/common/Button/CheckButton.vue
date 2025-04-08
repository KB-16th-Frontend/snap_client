<template>
    <button class="check-btn" :class="{selected:isSelected}" @click="onClick" >
        <span class="me-2" v-if="isSelected"><i class="fa-solid fa-check" color="white"></i></span>
        <slot></slot>
    </button>
   </template>

<script setup>
defineProps({
    onClick : Function,
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
    border: 1px solid #1e3050;
    background-color: white;
    color: #1e3050;
    cursor: pointer;
    transition: 0.2s;
}

.check-btn.selected {
    background-color: #1e3050;
    color: white;
    font-weight: bold;
}
</style>
