<template>
    <section class="w-100">
        <BaseTypography tag="h2" color="primary" size="lg" weight="bold" class="text-start w-100">
            새로운 지출이 생겼나요?
        </BaseTypography>

        <BaseCard title="수입 및 지출 추가" class="mt-3">
            <BaseTypography color="black" size="medium" weight="bold" class="mt-3">
                새로운 수입 및 지출이 생겼나요?<br />
                스냅과 함께 하루를 기록해보세요!</BaseTypography
            >
            <!-- TODO: to 목적지 추가 -->
            <router-link class="btn btn-primary mt-3" to="/payments">
                <BaseTypography color="white" size="medium" weight="bold"
                    >수입 및 지출 추가하기</BaseTypography
                >
            </router-link>
        </BaseCard>
        <!-- TODO: toName 목적지 변경 -->
        <BaseCard title="최근 지출 내역" toName="payments" class="mt-3">
            <!-- TODO: 이모지 리스트 아이템 추가 -->
            <ul class="mt-4">
                <li>하이</li>
                <li>하이</li>
                <li>하이</li>
            </ul>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
</script>
