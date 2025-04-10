<template>
    <Teleport to="#modal">
        <div class="overlay" v-if="isOpen" @click="onBackdropClick">
            <div class="modal-container" @click.stop>
                <slot />
            </div>
            <!-- <BaseCard class="modal-container"> <slot></slot></BaseCard> -->
        </div>
    </Teleport>
</template>

<script setup>
// import BaseCard from '../Card/BaseCard.vue'

defineProps({
    isOpen: Boolean,
})
const emit = defineEmits(['close'])

const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) emit('close')
}
</script>

<style scoped>
.overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
.modal-container {
    max-width: 46rem;
    width: 90%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-sizing: border-box;
    opacity: 100%;
}
</style>
