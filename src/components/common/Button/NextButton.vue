<template>
    <button
        class="next-btn"
        :class="{ active: isActive }"
        :disabled="isActive"
        @click="handleClick"
    >
        다음
    </button>
</template>
<script setup>
defineProps({
    isActive: Boolean,
})
</script>
<style>
.next-btn{

}
.next-btn.active{
    
}
</style>