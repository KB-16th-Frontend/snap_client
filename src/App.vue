<style scoped></style>

<template>
    <!-- 헤더와 푸터는 고정 -->
    <RouterView />
    <LottieLoading v-if="isLoading" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import LottieLoading from '@/components/common/Loading/LottieLoading.vue'
import { onMounted, ref } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { fetchCategories } from '@/api/category'

const isLoading = ref(false)
const categoryStore = useCategoryStore()

onMounted(async () => {
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 2000)

    const data = await fetchCategories()
    categoryStore.setCategories(data)
})
</script>
