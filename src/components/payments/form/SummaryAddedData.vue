<template>
    <div v-if="categoryData">
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
        <PaymentItem :title="title" :emoji="categoryData.emoji" :description="description" />
        <BaseTypography size="xl" color="primary" weight="black" class="text-start w-100 my-3"
            >{{ amount.toLocaleString() }}원
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3">
            <span class="fw-bold">날짜:</span> {{ date }}
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3 d-flex align-items-center gap-1">
            <!-- TODO: getCategoryAPI -->
            <span class="fw-bold">카테고리:</span>
            <div class="badge rounded-pill bg-primary">#{{ categoryData.name }}</div>
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3">
            <span class="fw-bold">수입/지출 분류:</span>
            {{ transactionType === 'income' ? '수입' : '지출' }}
        </BaseTypography>
        <BaseTypography size="md" class="text-start w-100 my-3">
            <span class="fw-bold">상세 설명:</span>
            {{ description.length > 0 ? description : '없음' }}
        </BaseTypography>
    </div>
</template>

<script setup>
import PaymentItem from '@/components/payments/item/PaymentItem.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { onMounted, ref } from 'vue'
import { getCategoryDetailAPI } from '@/api/category'

const props = defineProps({
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
const categoryData = ref(null)

const fetchCategoryDetail = async (id) => {
    if (!id) return

    try {
        const data = await getCategoryDetailAPI(id)
        categoryData.value = data
        console.log('카테고리 데이터:', data)
        console.log(categoryData.value)
    } catch (error) {
        console.error('카테고리 데이터 가져오기 실패:', error)
    }
}

// 초기 진입 시, categoryId가 있으면 fetch
onMounted(async () => {
    await fetchCategoryDetail(props.categoryId)
})
</script>
