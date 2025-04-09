<style scoped></style>
<template>
    <DetailLayout class="pb-5" :onBack="onBack">
        <TotalBlock :year="year" :month="month" :income="income" :spending="spending"></TotalBlock>
        <PaymentsOfDay
            v-for="item in data"
            :key="item.items.id"
            :day="item.day"
            :paymentList="item.items"
        ></PaymentsOfDay>
        <div class="d-grid p-3 pb-5">
            <button type="button" class="btn btn-primary btn-block">더보기</button>
        </div>
    </DetailLayout>
</template>
<script setup>
import TotalBlock from '@/components/payments/detail/TotalBlock.vue'
import PaymentsOfDay from '@/components/payments/detail/PaymentsOfDay.vue'
import DetailLayout from '@/components/layouts/DetailLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const onBack = () => {
    router.back()
}

// FIXME: DEV에서만 데이터 사용 후 삭제
const year = 2025
const month = 4
const income = 1000000
const spending = 123400
const data = [
    {
        day: 3,
        items: [
            {
                id: '1',
                title: '용돈',
                amount: 12000000,
                category: '식비',
                transactionType: 'income',
                emoji: '🎈',
            },
            {
                id: '2',
                title: '시홍쓰',
                amount: 12000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
            {
                id: '3',
                title: '시홍쓰',
                amount: 12000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
        ],
    },
    {
        day: 2,
        items: [
            {
                id: '4',
                title: '시홍쓰',
                amount: 12000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
            {
                id: '5',
                title: '시홍쓰',
                amount: 12000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
            {
                id: '6',
                title: '시홍쓰',
                amount: 12000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
            {
                id: '7',
                title: '시홍쓰',
                amount: 12000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
        ],
    },
    {
        day: 1,
        items: [
            {
                id: '8',
                title: '무이',
                amount: 70000,
                category: '식비',
                transactionType: 'spending',
                emoji: '🎈',
            },
            {
                id: '9',
                title: 'GYMBOX(어린이대공원역점)',
                amount: 150000,
                spendType: 'goodSpending',
                category: '건강',
                transactionType: 'spending',
                emoji: '🎈',
            },
        ],
    },
]
</script>
