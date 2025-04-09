<template>
    <section class="w-100">
        <AddNewSpending />
        <!-- TODO: toName 목적지 변경 -->
        <BaseCard title="최근 지출 내역" toName="payments" class="mt-3">
            <!-- TODO: 이모지 리스트 아이템 추가 -->
            <ul class="mt-4 d-flex flex-column gap-3">
                <PaymentItem
                    title="테스트"
                    category="식비"
                    :amount="10000"
                    emoji="🍔"
                    transactionType="spending"
                />
                <PaymentItem
                    title="테스트"
                    category="식비"
                    :amount="10000"
                    emoji="🍔"
                    transactionType="spending"
                />
                <PaymentItem
                    title="테스트"
                    category="식비"
                    :amount="10000"
                    emoji="🍔"
                    transactionType="spending"
                />
            </ul>
        </BaseCard>
    </section>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import PaymentItem from '../common/PaymentItem/PaymentItem.vue'
import AddNewSpending from '../payments/AddNewSpending.vue'
</script>
