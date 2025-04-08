<template>
    <div class="ms-3">
        <BaseTypography size="lg" weight="bold" color="primary" class="mt-4">
            Oops..!<br />페이지가 없거나 사라졌어요!</BaseTypography
        >
    </div>
    <br />
    <br />
    <BaseTypography size="2xl" weight="black" color="primary" class="text-center"
        >404<br />ERROR!</BaseTypography
    >
    <div class="position-absolute bottom-0 start-0 end-0 p-3">
        <BaseTypography size="2xl" class="text-center mb-5">🚨</BaseTypography>
        <button class="btn btn-primary btn-lg w-100" @click="goHome">홈으로 돌아가기</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseTypography from '../Typography/BaseTypography.vue'
const router = useRouter()

const goHome = () => router.push('/')
</script>
