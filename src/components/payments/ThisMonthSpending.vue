<style scoped>
select {
    border-radius: 4px;
    border: 1px solid #dee2e6;
    padding: 0.4rem;
    padding-right: 1.5rem;
}
</style>
<template>
    <section class="w-100 p-3 bg-light-blue">
        <div class="d-flex justify-content-between w-100 mb-4">
            <BaseTypography size="lg" weight="bold">
                {{ props.name }} 님의<br />
                {{ modelValueYear }}년 {{ modelValueMonth }}월<br />
                소비 기록
            </BaseTypography>
            <BaseTypography size="2xl" class="emoji">📝</BaseTypography>
        </div>

        <div class="d-flex gap-3 select-box">
            <select
                class="form-select"
                :value="modelValueYear"
                @change="emit('update:modelValueYear', Number($event.target.value))"
            >
                <option v-for="(item, index) in years" :key="index" :value="item">
                    {{ item }}년
                </option>
            </select>

            <select
                class="form-select"
                :value="modelValueMonth"
                @change="emit('update:modelValueMonth', Number($event.target.value))"
            >
                <option v-for="(item, index) in months" :key="index" :value="item">
                    {{ item }}월
                </option>
            </select>
        </div>
    </section>
</template>
<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValueYear: Number,
    modelValueMonth: Number,
    name: String,
})
const emit = defineEmits(['update:modelValueYear', 'update:modelValueMonth'])

const years = [2025, 2024, 2023, 2022, 2021]
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
</script>
