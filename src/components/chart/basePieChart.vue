<template>
    <div>
        <canvas ref="pieCanvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, PieController, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { PIECHART_COLORS } from '@/common/styles.js'

Chart.register(PieController, ArcElement, Tooltip, Legend, Title)

const props = defineProps({
    labels: {
        type: Array,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
})

const pieCanvas = ref(null)
let chartInstance = null

const renderChart = () => {
    chartInstance = new Chart(pieCanvas.value, {
        type: 'pie',
        data: {
            labels: props.labels,
            datasets: [
                {
                    data: props.data,
                    backgroundColor: PIECHART_COLORS,
                    borderColor: PIECHART_COLORS,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 0,
                margin: 0,
            },
            plugins: {
                legend: {
                    position: 'right',
                    align: 'start',
                    labels: {
                        boxWidth: 8,
                        boxHeight: 8,
                        padding: 6,
                    },
                },
                title: {
                    display: false,
                },
            },
        },
    })
}
onMounted(() => {
    renderChart()
})
</script>
