<style scoped></style>

<template>
    <BaseLayout>
        <ValueBlock
            v-if="todaysData && todaysData.length > 0"
            :name="name"
            :todayValueScore="todaysData[0].valueScore"
            :todayValueChangeRate="todaysData[0].valueChangeRate"
        ></ValueBlock>
        <div class="p-3 pt-2 mb-5">
            <FluctuationBlock
                v-if="todaysData && todaysData.length > 0"
                :todayValueScore="todaysData[0].valueScore"
                :todayValueChangeRate="todaysData[0].valueChangeRate"
                :chartData="chartData"
            ></FluctuationBlock>
            <AddNewSpending></AddNewSpending>
        </div>
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import ValueBlock from '@/components/chart/ValueBlock.vue'
import FluctuationBlock from '@/components/chart/FluctuationBlock.vue'
import AddNewSpending from '@/components/payments/AddNewSpending.vue'
import useUserStore from '@/stores/auth'
import { getValueIndex } from '@/api/valueIndex'
import { onMounted } from 'vue'
import { useAuthGuard } from '@/hooks/useAuthGuard'

const user = useUserStore()
const name = user.getUserNickname

const todaysData = ref(null)
const chartData = ref(null)

onMounted(async () => {
    await useAuthGuard()
    const allData = await getValueIndex()

    const today = new Date()
    const todayString = today.toISOString().split('T')[0]
    todaysData.value = await getValueIndex({ date: todayString })

    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 6)

    const recent7Days = allData.filter((item) => {
        const itemDate = new Date(item.date)
        return itemDate >= sevenDaysAgo && itemDate <= today
    })

    recent7Days.sort((a, b) => new Date(a.date) - new Date(b.date))
    chartData.value = recent7Days
})
</script>
