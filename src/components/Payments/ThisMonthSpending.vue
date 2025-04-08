<style scoped>
.sec {
    background-color: #e1ecff;
    height: 15rem;
    position: relative;
}
select {
    border-radius: 4px;
    border: 1px solid #dee2e6;
    padding: 0.4rem;
    padding-right: 1.5rem;
}
.title-box {
    position: absolute;
    left: 3rem;
    top: 2.5rem;
}
.select-box {
    position: absolute;
    right: 3rem;
    bottom: 2.5rem;
}
.emoji {
    position: absolute;
    top: 2.5rem;
    right: 3rem;
}
</style>
<template>
    <section class="w-100 p-3 sec">
        <div class="d-flex flex-column title-box">
            <BaseTypography size="lg" weight="bold">{{ props.name }} 님의</BaseTypography>
            <BaseTypography size="lg" weight="bold"
                >{{ selectedYear }}년 {{ selectedMonth }}월</BaseTypography
            >
            <BaseTypography size="lg" weight="bold">소비 기록</BaseTypography>
        </div>
        <BaseTypography size="2xl" class="emoji">📝</BaseTypography>
        <div class="d-flex gap-3 select-box">
            <select v-model="selectedYear">
                <option v-for="(item, index) in years" :key="index" :value="item">
                    {{ item }}년
                </option>
            </select>
            <select v-model="selectedMonth">
                <option v-for="(item, index) in months" :key="index" :value="item">
                    {{ item }}월
                </option>
            </select>
        </div>
    </section>
</template>
<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'
import { ref, defineProps } from 'vue'
const props = defineProps({
    name: {
        type: String,
    },
})
const years = [2025, 2024, 2023, 2022, 2021]
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const selectedYear = ref(new Date().getFullYear())
const selectedMonth = ref(new Date().getMonth() + 1)
</script>
