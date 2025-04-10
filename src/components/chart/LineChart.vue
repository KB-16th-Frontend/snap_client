<style scoped>
canvas {
    background-color: white;
}
</style>
<template>
    <canvas ref="chartCanvas"></canvas>
</template>
<script setup>
import { onMounted, ref, computed, defineProps } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)
const chartInstance = ref(null)

const props = defineProps({
    valueChangeRate: {
        type: Number,
    },
    selectedRange: {
        type: String,
        default: 'week',
    },
})

const borderColor = computed(() => {
    if (props.valueChangeRate > 0) {
        return '#E42727'
    } else if (props.valueChangeRate < 0) {
        return '#1C60FF'
    } else {
        return '#173355'
    }
})

const fullData = [
    { date: '2025-03-01', value: 9800 },
    { date: '2025-03-02', value: 10800 },
    { date: '2025-03-03', value: 10500 },
    { date: '2025-03-04', value: 11000 },
    { date: '2025-03-05', value: 10000 },
    { date: '2025-03-06', value: 9500 },
    { date: '2025-03-07', value: 9800 },
    { date: '2025-03-08', value: 10800 },
    { date: '2025-03-09', value: 10100 },
    { date: '2025-03-10', value: 10500 },
    { date: '2025-03-11', value: 9800 },
    { date: '2025-03-12', value: 10800 },
    { date: '2025-03-13', value: 10500 },
    { date: '2025-03-14', value: 11000 },
    { date: '2025-03-15', value: 10000 },
    { date: '2025-03-16', value: 9500 },
    { date: '2025-03-17', value: 9800 },
    { date: '2025-03-18', value: 10800 },
    { date: '2025-03-19', value: 10100 },
    { date: '2025-03-20', value: 10500 },
    { date: '2025-03-21', value: 9800 },
    { date: '2025-03-22', value: 10800 },
    { date: '2025-03-23', value: 10500 },
    { date: '2025-03-24', value: 11000 },
    { date: '2025-03-25', value: 10000 },
    { date: '2025-03-26', value: 9500 },
    { date: '2025-03-27', value: 9800 },
    { date: '2025-03-28', value: 10800 },
    { date: '2025-03-29', value: 10100 },
    { date: '2025-03-30', value: 10500 },
    { date: '2025-04-01', value: 9800 },
    { date: '2025-04-02', value: 10800 },
    { date: '2025-04-03', value: 10500 },
    { date: '2025-04-04', value: 11000 },
    { date: '2025-04-05', value: 10000 },
    { date: '2025-04-06', value: 9500 },
    { date: '2025-04-07', value: 9800 },
    { date: '2025-04-08', value: 10800 },
    { date: '2025-04-09', value: 10100 },
    { date: '2025-04-10', value: 10500 },
]
const filterDataByRange = (range) => {
    const now = new Date()
    let startDate
    if (range === 'week') {
        startDate = new Date(now)
        startDate.setDate(now.getDate() - 7)
    } else if (range === 'month') {
        startDate = new Date(now)
        startDate.setMonth(now.getMonth() - 1)
    } else if (range === 'all') {
        return fullData
    }
    return fullData.filter((item) => new Date(item.date) >= startDate)
}

const renderChart = (filteredData) => {
    const labels = filteredData.map((item) => {
        const dateObj = new Date(item.date)
        const month = String(dateObj.getMonth() + 1).padStart(2, '0')
        const day = String(dateObj.getDate()).padStart(2, '0')
        return `${month}-${day}`
    })
    const values = filteredData.map((item) => item.value)

    if (chartInstance.value) {
        chartInstance.value.destroy()
    }
    chartInstance.value = new Chart(chartCanvas.value, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: '소비가치',
                    data: values,
                    fill: false,
                    borderColor: borderColor.value,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    ticks: {
                        stepSize: 500,
                    },
                },
            },
        },
    })
}

onMounted(() => {
    renderChart(filterDataByRange(props.selectedRange))
})
</script>
