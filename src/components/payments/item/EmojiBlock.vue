<style scoped>
.emoji-box {
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 8px;
    flex-shrink: 0;
}
.emoji-text {
    position: absolute;
    font-size: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
<template>
    <div class="emoji-box" :style="{ backgroundColor: getRandomColor() }">
        <div class="emoji-text">{{ props.emoji }}</div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { getRandomColor } from '@/utils/common'
const props = defineProps({
    emoji: {
        type: String,
    },
})
</script>
