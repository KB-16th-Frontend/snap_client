<style scoped></style>

<template>
    <BaseLayout>
        <ValueBlock
            :name="name"
            :valueScore="valueScore"
            :valueChangeRate="valueChangeRate"
        ></ValueBlock>
        <div class="p-3 pt-2 mb-5">
            <FluctuationBlock
                :valueScore="valueScore"
                :valueChangeRate="valueChangeRate"
            ></FluctuationBlock>
            <AddNewSpending></AddNewSpending>
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import ValueBlock from '@/components/chart/ValueBlock.vue'
import FluctuationBlock from '@/components/chart/FluctuationBlock.vue'
import AddNewSpending from '@/components/payments/AddNewSpending.vue'
const name = '김스냅'
const valueScore = 1234567
const valueChangeRate = -1.24
</script>
