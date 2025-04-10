<style scoped></style>
<template>
    <DetailLayout class="pb-5" :onBack="onBack">
        <TotalBlock
            :year="year"
            :month="month"
            :income="totalIncome"
            :spending="totalSpending"
            v-model:selectedOption="selectedOption"
        ></TotalBlock>
        <PaymentsOfDay
            v-for="item in groupedData"
            :key="item.day"
            :day="item.day"
            :paymentList="item.items"
            @openModal="handleOpenModal"
        ></PaymentsOfDay>
        <div class="d-grid p-3 pb-5">
            <button type="button" class="btn btn-primary btn-block">더보기</button>
        </div>
        <MoreButton></MoreButton>
        <PaymentDetailModal
            v-if="isOpen"
            :isOpen="isOpen"
            :item="selectedPayment"
            @close="isOpen = false"
        />
    </DetailLayout>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import TotalBlock from '@/components/payments/detail/TotalBlock.vue'
import PaymentsOfDay from '@/components/payments/detail/PaymentsOfDay.vue'
import DetailLayout from '@/components/layouts/DetailLayout.vue'
import PaymentDetailModal from '@/components/common/Modal/PaymentDetailModal.vue'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { fetchStatistics } from '@/api/payments'

const isOpen = ref(false)
const selectedPayment = ref({})

const handleOpenModal = (item) => {
    selectedPayment.value = item
    selectedPayment.value.id = item.id
    console.log(selectedPayment)
    isOpen.value = true
    console.log(isOpen.value)
}

const router = useRouter()
const onBack = () => {
    router.back()
}

onMounted(async () => {
    await useAuthGuard()
})

// FIXME: DEV에서만 데이터 사용 후 삭제
const year = 2025
const month = 4
const selectedOption = ref('total')

const data = ref([])
const monthlyData = computed(() => {
    return data.value.filter((item) => {
        const date = new Date(item.spendAt)
        return date.getFullYear() === year && date.getMonth() + 1 === month
    })
})

const totalIncome = computed(() => {
    return monthlyData.value
        .filter((item) => item.transactionType === 'income')
        .reduce((sum, item) => sum + item.amount, 0)
})
const totalSpending = computed(() => {
    return monthlyData.value
        .filter((item) => item.transactionType === 'spending')
        .reduce((sum, item) => sum + item.amount, 0)
})

const filteredData = computed(() => {
    return monthlyData.value.filter((item) => {
        if (selectedOption.value === 'income') {
            return item.transactionType === 'income'
        } else if (selectedOption.value === 'spending') {
            return item.transactionType === 'spending'
        } else {
            return true
        }
    })
})
const groupedData = computed(() => {
    const grouped = filteredData.value.reduce((acc, cur) => {
        const date = new Date(cur.spendAt)
        const day = date.getDate()

        if (!acc[day]) {
            acc[day] = []
        }

        acc[day].push({
            id: cur.id,
            title: cur.title,
            amount: cur.amount,
            category: cur.categoryId,
            transactionType: cur.transactionType,
            emoji: '0',
        })

        return acc
    }, {})

    const result = Object.keys(grouped)
        .map((day) => ({
            day: parseInt(day),
            items: grouped[day],
        }))
        .sort((a, b) => b.day - a.day)

    return result
})

onMounted(async () => {
    data.value = await fetchStatistics({
        params: {
            userId: 1,
        },
    })
})
</script>
