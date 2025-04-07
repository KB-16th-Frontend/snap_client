<style scoped></style>

<template>
    <!-- 헤더와 푸터는 고정 -->
    <RouterView />
    <LottieLoading v-if="isLoading" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import LottieLoading from '@/components/common/Loading/LottieLoading.vue'
// import { onMounted, ref } from 'vue'

// const isLoading = ref(false)

// onMounted(() => {
//     isLoading.value = true
//     setTimeout(() => {
//         isLoading.value = false
//     }, 2000) // 2초 후 로딩 종료
// })
</script>
