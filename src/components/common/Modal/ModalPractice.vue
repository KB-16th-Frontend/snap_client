<template>
    <button @click="openModal">Modal</button>
    <div class="modal-wrap" v-if="isOpen">
        <div class="modal-container">
            tmp
            <button @click="closeModal">닫기</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const openModal = () => {
    isOpen.value = true
}

const closeModal = () => {
    isOpen.value = false
}
</script>
<style>
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}
</style>
