<template>
    <DetailLayout class="pb-5" :onBack="onBack">
        <TotalBlock
            :year="year"
            :month="month"
            :income="totalIncome"
            :spending="totalSpending"
            v-model:selectedOption="selectedOption"
        />

        <PaymentsOfDay
            v-for="item in groupedData"
            :key="item.day"
            :day="item.day"
            :paymentList="item.items"
            @openModal="handleOpenModal"
        />

        <div class="d-grid p-3 pb-5">
            <button
                v-if="page * limit < totalCount"
                type="button"
                class="btn btn-primary btn-block"
                @click="fetchTransactions()"
            >
                더보기
            </button>
        </div>

        <PaymentDetailModal
            v-if="isOpen"
            :isOpen="isOpen"
            :item="selectedPayment"
            @close="isOpen = false"
        />
    </DetailLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { getAllTransaction } from '@/api/payments'

import TotalBlock from '@/components/payments/detail/TotalBlock.vue'
import PaymentsOfDay from '@/components/payments/detail/PaymentsOfDay.vue'
import DetailLayout from '@/components/layouts/DetailLayout.vue'
import PaymentDetailModal from '@/components/common/Modal/PaymentDetailModal.vue'
import { useCategoryStore } from '@/stores/categoryStore'

const router = useRouter()
const route = useRoute()
const onBack = () => router.back()

const year = Number(route.query.year)
const month = Number(route.query.month)

// ✅ 로그인 확인
onMounted(async () => {
    await useAuthGuard()
    await fetchTransactions()
})

// ✅ 날짜 및 상태 관련
const selectedOption = ref('total')
// query로 받아야됨 year랑 month

// ✅ 모달 관리
const isOpen = ref(false)
const selectedPayment = ref({})
const handleOpenModal = (item) => {
    selectedPayment.value = item
    isOpen.value = true
}

// ✅ 거래 내역 & 페이징
const fullData = ref([]) // 전체 받아온 거래 내역
const transactions = ref([]) // 현재 화면에 보여줄 거래 내역
const page = ref(0)
const limit = 5
const totalCount = ref(0)

const fetchTransactions = async () => {
    // ✅ 처음 1번만 전체 데이터를 받아옴
    if (fullData.value.length === 0) {
        const result = await getAllTransaction(
            selectedOption.value === 'total' ? {} : { transactionType: selectedOption.value },
        )
        fullData.value = result
        totalCount.value = result.length
    }

    // ✅ 페이지 증가
    page.value++

    // ✅ 다음 페이지 데이터 슬라이스
    const start = (page.value - 1) * limit
    const end = page.value * limit
    const nextChunk = fullData.value.slice(start, end)

    // ✅ 누적해서 저장
    transactions.value.push(...nextChunk)
}

// ✅ 월 기준 필터링
const monthlyData = computed(() =>
    transactions.value.filter((item) => {
        const date = new Date(item.spendAt)
        return date.getFullYear() === year && date.getMonth() + 1 === month
    }),
)

// ✅ 필터 옵션 (전체 / 수입 / 지출)
const filteredData = computed(() =>
    monthlyData.value.filter((item) => {
        if (selectedOption.value === 'income') return item.transactionType === 'income'
        if (selectedOption.value === 'spending') return item.transactionType === 'spending'
        return true
    }),
)

// ✅ 합계
const totalIncome = computed(() =>
    monthlyData.value
        .filter((item) => item.transactionType === 'income')
        .reduce((sum, item) => sum + item.amount, 0),
)

const totalSpending = computed(() =>
    monthlyData.value
        .filter((item) => item.transactionType === 'spending')
        .reduce((sum, item) => sum + item.amount, 0),
)

// ✅ 날짜 기준 그룹핑
const groupedData = computed(() => {
    const grouped = {}
    const categories = useCategoryStore()

    const getCategoryName = (categoryId) => {
        return categories.categories.find((category) => category.id == categoryId).name
    }
    const getCategoryEmoji = (categoryId) => {
        return categories.categories.find((category) => category.id == categoryId).emoji
    }

    filteredData.value.forEach((item) => {
        const day = new Date(item.spendAt).getDate()
        if (!grouped[day]) grouped[day] = []
        grouped[day].push({
            id: item.id,
            title: item.title,
            amount: item.amount,
            spendAt: item.spendAt,
            category: getCategoryName(item.categoryId),
            transactionType: item.transactionType,
            emoji: getCategoryEmoji(item.categoryId),
        })
    })

    return Object.entries(grouped)
        .map(([day, items]) => ({ day: Number(day), items }))
        .sort((a, b) => b.day - a.day)
})
</script>
