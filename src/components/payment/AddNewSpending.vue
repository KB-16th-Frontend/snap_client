<template>
    <section class="w-100 mt-4">
        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100">
            새로운 지출이 생겼나요?
        </BaseTypography>

        <BaseCard title="수입 및 지출 추가" class="mt-3">
            <BaseTypography color="black" size="md" weight="bold" class="mt-3">
                새로운 수입 및 지출이 생겼나요?<br />스냅과 함께 하루를
                기록해보세요!</BaseTypography
            >
            <router-link class="btn btn-primary mt-3 fw-bold" to="/">
                수입 및 지출 추가하기
            </router-link>
        </BaseCard>
    </section>
</template>
<script setup>
import BaseCard from '../common/Card/BaseCard.vue'
import BaseTypography from '../common/Typography/BaseTypography.vue'
</script>
