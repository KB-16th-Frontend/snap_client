<template>
    <BaseModal :isOpen="isOpen" @close="$emit('close')">
        <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100 my-3">
            지출 기록 상세
        </BaseTypography>

        <PaymentItem :title="item.title" :emoji="item.emoji" :description="item.description" />

        <BaseTypography size="xl" color="primary" weight="black" class="text-start w-100 my-3">
            {{ item.amount.toLocaleString() }}원
        </BaseTypography>

        <BaseTypography size="md" class="text-start w-100 my-3">
            <span class="fw-bold">날짜:</span> {{ item.spendAt }}
        </BaseTypography>

        <BaseTypography size="md" class="text-start w-100 my-3 d-flex align-items-center gap-1">
            <span class="fw-bold">카테고리:</span>
            <div class="badge rounded-pill bg-primary">#{{ item.category }}</div>
        </BaseTypography>

        <BaseTypography size="md" class="text-start w-100 my-3">
            <b>수입/지출 분류:</b> {{ item.transactionType === 'income' ? '수입' : '지출' }}
        </BaseTypography>

        <BaseTypography size="md" class="text-start w-100 my-3">
            <span class="fw-bold">상세 설명:</span>
            {{ item.description?.length > 0 ? item.description : '없음' }}
        </BaseTypography>

        <div class="d-flex justify-content-between gap-2 mt-4">
            <button class="btn btn-success w-100" @click="goEdit">수정하기</button>
            <button class="btn btn-danger w-100" @click="$emit('close')">닫기</button>
        </div>
    </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
import BaseTypography from '../Typography/BaseTypography.vue'
import PaymentItem from '@/components/payments/item/PaymentItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { item } = defineProps({
    item: {
        type: Object,
        required: true,
    },
})

const goEdit = () => {
    router.push(`/payments/edit/${item.id}`)
}
</script>
