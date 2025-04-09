<template>
    <BaseTypography size="lg" weight="bold" color="primary" class="text-start mx-4 mt-4"
        >카테고리별 지출</BaseTypography
    >
    <div class="d-flex justify-content-center">
        <BaseCard class="my-3 mx-4">
            <BasePieChart :labels="lables" :data="data" />
            <div>
                <ul
                    class="mt-4 d-flex flex-column gap-3"
                    v-for="(categorySpending, index) in props.categorySpendings"
                    :key="index"
                >
                    <li class="d-flex justify-content-between w-100">
                        <div class="d-flex gap-2">
                            <Emoji :emoji="categorySpending.emoji" />
                            <div class="title-category-box d-flex align-items-center">
                                <BaseTypography
                                    size="md"
                                    weight="medium"
                                    class="d-block text-truncate flex-shrink-1"
                                    style="max-width: 150px"
                                >
                                    {{ categorySpending.title }}
                                </BaseTypography>
                            </div>
                        </div>
                        <BaseTypography
                            size="md"
                            weight="medium"
                            class="d-flex align-items-center my-auto"
                        >
                            {{ categorySpending.data.toLocaleString() }}원</BaseTypography
                        >
                    </li>
                </ul>
            </div>
        </BaseCard>
    </div>
</template>

<script setup>
import BaseCard from '@/components/common/Card/BaseCard.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import BasePieChart from '@/components/chart/BasePieChart.vue'
import Emoji from '@/components/payments/item/EmojiBlock.vue'

const props = defineProps({
    categorySpendings: {
        type: Array,
    },
})
const lables = props.categorySpendings
const data = props.categorySpendings.map((item) => Number(item.data))
</script>
