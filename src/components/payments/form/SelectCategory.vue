<template>
    <div>
        <BaseTypography tag="h2" size="lg" color="primary" weight="bold" class="text-start w-100">
            {{ transactionType === 'income' ? '수입' : '소비' }} 카테고리를 선택해주세요!
        </BaseTypography>
        <div class="d-flex flex-wrap gap-2 mt-3">
            <button
                v-for="category in categories"
                class="btn rounded-pill fs-sm fw-bold"
                :class="{
                    'btn-primary': props.selectedCategoryId === category.id,
                    'btn-outline-primary': props.selectedCategoryId !== category.id,
                }"
                :key="category.id"
                @click="onClick(category.id)"
            >
                <i v-if="props.selectedCategoryId === category.id" class="fa-solid fa-check"></i>
                {{ category.name }}
            </button>
        </div>
    </div>
</template>

<script setup>
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
const categories = ref([])

const props = defineProps({
    transactionType: {
        type: String,
        required: true,
        validator: (value) => {
            return ['income', 'spending'].includes(value)
        },
    },
    selectedCategoryId: {
        type: String,
        default: '',
    },
    onClick: {
        type: Function,
        default: () => {},
        validator: (value) => {
            return typeof value === 'function'
        },
    },
})

if (props.transactionType === 'income') {
    categories.value = categoryStore.categories.filter(
        (category) => category.transactionType === 'income',
    )
} else {
    categories.value = categoryStore.categories.filter(
        (category) => category.transactionType === 'spending',
    )
}
</script>
