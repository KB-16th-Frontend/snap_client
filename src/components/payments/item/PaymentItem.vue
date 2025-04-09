<template>
    <li class="d-flex justify-content-between w-100">
        <div class="d-flex gap-2">
            <Emoji :emoji="props.emoji" />
            <div v-if="category" class="title-category-box">
                <BaseTypography
                    size="md"
                    weight="medium"
                    class="d-block text-truncate flex-shrink-1"
                    style="max-width: 150px"
                >
                    {{ props.title }}
                </BaseTypography>
                <BaseTypography size="sm" weight="medium" color="gray">{{
                    props.category
                }}</BaseTypography>
            </div>
            <div v-else class="d-flex flex-column justify-content-center">
                <BaseTypography
                    size="lg"
                    weight="bold"
                    class="d-inline-block text-truncate"
                    style="max-width: 250px"
                >
                    {{ props.title }}
                </BaseTypography>
            </div>
        </div>
        <BaseTypography
            v-if="amount"
            size="md"
            weight="medium"
            :color="amountColor"
            class="d-flex align-items-center my-auto"
        >
            {{ props.amount.toLocaleString() }}원</BaseTypography
        >
    </li>
</template>
<script setup>
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import Emoji from './EmojiBlock.vue'
import { computed, defineProps } from 'vue'
const props = defineProps({
    title: {
        type: String,
    },
    category: {
        type: String,
        // validator 넣기
    },
    amount: {
        type: Number,
        default: null,
        validator: (value) => {
            return value >= 0
        },
    },
    transactionType: {
        type: String,
        default: null,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    emoji: {
        type: String,
        default: null,
    },
})

const amountColor = computed(() => {
    if (props.transactionType === 'income') {
        return 'red'
    } else if (props.transactionType === 'spending') {
        return 'blue'
    } else {
        return 'black'
    }
})
</script>
