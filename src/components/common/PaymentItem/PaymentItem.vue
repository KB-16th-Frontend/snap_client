<style scoped>
.title-category-box {
    display: flex;
    flex-direction: column;
    width: 150px;
    gap: 8px;
}
.title-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
}
</style>
<template>
    <li class="d-flex justify-content-between w-100">
        <div class="d-flex gap-2">
            <Emoji :emoji="convertCategoryToEmoji(props.category)"></Emoji>
            <div v-if="category" class="title-category-box">
                <BaseTypography size="md" weight="medium" class="title">
                    {{ props.title }}
                </BaseTypography>
                <BaseTypography size="sm" weight="medium" color="gray">{{
                    props.category
                }}</BaseTypography>
            </div>
            <div v-else class="title-box">
                <BaseTypography size="lg" weight="bold">
                    {{ props.title }}
                </BaseTypography>
            </div>
        </div>
        <BaseTypography v-if="amount" size="md" weight="medium" :color="amountColor" class="amount"
            >{{ props.amount.toLocaleString() }}원</BaseTypography
        >
    </li>
</template>
<script setup>
import BaseTypography from '../Typography/BaseTypography.vue'
import Emoji from './Emoji.vue'
import { computed, defineProps } from 'vue'
import { convertCategoryToEmoji } from '@/utils/common'
const props = defineProps({
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    amount: {
        type: Number,
    },
    transactionType: {
        type: String,
    },
})
const amountColor = computed(() => {
    if (props.transactionType === 'spending') {
        return 'blue'
    } else if (props.transactionType === 'income') {
        return 'red'
    }
})
</script>
