<style scoped></style>
<template>
    <div class="p-3">
        <BaseTypography size="lg" weight="bold" color="primary">{{ day }}일</BaseTypography>
        <BaseCard class="mt-3">
            <ul class="d-flex flex-column gap-3">
                <li
                    role="button"
                    class="link-item"
                    v-for="item in props.paymentList"
                    :key="item.id"
                    @click="() => emit('openModal', item)"
                >
                    <PaymentItem
                        :title="item.title"
                        :category="item.category"
                        :amount="item.amount"
                        :transactionType="item.transactionType"
                        :emoji="item.emoji"
                    ></PaymentItem>
                </li>
            </ul>
        </BaseCard>
    </div>
</template>
<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import PaymentItem from '@/components/payments/item/PaymentItem.vue'
import { defineProps } from 'vue'

const props = defineProps({
    day: {
        type: Number,
    },
    paymentList: {
        type: Array,
    },
})

const emit = defineEmits(['openModal'])
</script>
