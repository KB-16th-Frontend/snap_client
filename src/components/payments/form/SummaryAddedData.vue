<template>
    <div>
        <BaseTypography
            tag="h2"
            size="lg"
            color="primary"
            weight="bold"
            class="text-start w-100"
            style="margin-top: -1.5rem"
        >
            <!-- TODO: 사용자 이름 보여주기  -->
            김스냅 님의<br />
            {{ transactionType === 'income' ? '수입' : '지출' }} 기록을 추가했어요!
        </BaseTypography>
        <BaseTypography size="md" color="gray" weight="medium" class="text-start w-100 my-3"
            >지출 기록 상세</BaseTypography
        >
        <PaymentItem title="스타벅스" emoji="☕️" :description="description" />
        <BaseTypography size="xl" color="primary" weight="black" class="text-start w-100 my-3"
            >{{ amount.toLocaleString() }}원
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3">
            <b>날짜:</b> {{ date }}
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3 d-flex align-items-center gap-1">
            <!-- TODO: getCategoryAPI -->
            <b>카테고리:</b>
            <div class="badge rounded-pill bg-primary">#카페</div>
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3">
            <b>수입/지출 분류:</b> {{ transactionType === 'income' ? '수입' : '지출' }}
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3">
            <b>상세 설명:</b> {{ description.length > 0 ? description : '없음' }}
        </BaseTypography>
    </div>
</template>

<script setup>
import PaymentItem from '@/components/payments/item/PaymentItem.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'

defineProps({
    transactionType: {
        type: String,
        required: true,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    title: {
        type: String,
        default: '',
    },
    amount: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
        default: '',
    },
    categoryId: {
        type: String,
        default: '',
    },
    emoji: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
})
</script>
