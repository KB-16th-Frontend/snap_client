<style scoped></style>

<template>
    <BaseLayout class="pb-5">
        <ThisMonthSpending name="김스냅"></ThisMonthSpending>
        <div class="d-flex flex-column gap-block w-100 p-4">
            <SeeDetailBlock :income="income" :spending="spending"></SeeDetailBlock>
            <SpendingReport category="통신/주거비"></SpendingReport>
            <AddNewSpending></AddNewSpending>
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import ThisMonthSpending from '@/components/Payments/ThisMonthSpending.vue'
import SeeDetailBlock from '@/components/Payments/SeeDetailBlock.vue'
import SpendingReport from '@/components/Payments/SpendingReport.vue'
import AddNewSpending from '@/components/Payments/AddNewSpending.vue'
import { ref } from 'vue'
const income = ref(234567)
const spending = ref(123456)
</script>
