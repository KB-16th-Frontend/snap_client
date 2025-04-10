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
    chartData: {
        type: Array,
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
        return props.chartData
    }
    return props.chartData.filter((item) => new Date(item.date) >= startDate)
}

const renderChart = (filteredData) => {
    const labels = filteredData.map((item) => {
        const dateObj = new Date(item.date)
        const month = String(dateObj.getMonth() + 1).padStart(2, '0')
        const day = String(dateObj.getDate()).padStart(2, '0')
        return `${month}-${day}`
    })
    const values = filteredData.map((item) => item.valueScore)

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
                        stepSize: 5000,
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
