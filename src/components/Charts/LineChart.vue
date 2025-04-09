<template>
    <canvas ref="lineChartRef"></canvas>
</template>
<script setup>
import { onMounted, ref, computed, defineProps } from 'vue'
import { Chart, registerables } from 'chart.js'

const props = defineProps({
    valueChangeRate: {
        type: Number,
    },
})

const borderColor = computed(() => {
    if (props.valueChangeRate > 0) {
        return '#E42727'
    } else if (props.valueChangeRate < 0) {
        return '#1C60FF'
    } else {
        return 'black'
    }
})

Chart.register(...registerables)
const lineChartRef = ref(null)

onMounted(() => {
    new Chart(lineChartRef.value, {
        type: 'line',
        data: {
            labels: ['04-03', '04-04', '04-05', '04-06', '04-07', '04-08', '04-09'],
            datasets: [
                {
                    label: '소비가치',
                    data: [10000, 9000, 12000, 11000, 10000, 8000, 11000],
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
})
</script>
