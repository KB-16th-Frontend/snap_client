<style scoped>
.form-container {
    padding: 2rem 1rem 6rem;
}
</style>

<template>
    <DetailLayout :onBack="onClickBack">
        <!-- <div v-if=""></div> -->
        <div class="form-container">
            <SelectIncomeSpending
                v-if="currentStep === STEPS[0]"
                :selected="state.transactionType"
                :onClick="onClickTransactionType"
            />
            <InputTitle
                v-if="currentStep === STEPS[1]"
                :selected="state.transactionType"
                :onChange="(value) => (state.title = value)"
            />
            <div class="position-absolute bottom-0 start-0 end-0 p-3">
                <BaseTypography tag="h2" size="2xl" class="text-center mb-5">🧐</BaseTypography>
                <button
                    class="btn btn-primary btn-lg w-100"
                    :disabled="!isValidated"
                    @click="onClickNext"
                >
                    다음
                </button>
            </div>
        </div>
    </DetailLayout>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

import DetailLayout from '@/components/layouts/DetailLayout.vue'
import SelectIncomeSpending from '@/components/payments/SelectIncomeSpending.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import InputTitle from '@/components/payments/InputTitle.vue'

const STEPS = [
    '수입/지출 선택',
    '제목 입력',
    '금액 입력',
    '날짜 선택',
    '카테고리 선택',
    '상세설명 입력',
    '추가 완료',
]

const route = useRoute()
const paymentId = route.params.id
const currentStep = ref('수입/지출 선택')
const isValidated = ref(false)
const isError = ref(false)

const state = reactive({
    transactionType: null,
    title: '',
    amount: 0,
    date: '',
    category: '',
    description: '',
    isCompleted: false,
})

const onClickTransactionType = (type) => {
    state.transactionType = type
    if (state.transactionType !== null) {
        isValidated.value = true
    } else {
        isValidated.value = false
    }
}

const onClickNext = () => {
    if (currentStep.value === STEPS[0]) {
        currentStep.value = STEPS[1]
    } else if (currentStep.value === STEPS[1]) {
        currentStep.value = STEPS[2]
    } else if (currentStep.value === STEPS[2]) {
        currentStep.value = STEPS[3]
    } else if (currentStep.value === STEPS[3]) {
        currentStep.value = STEPS[4]
    } else if (currentStep.value === STEPS[4]) {
        currentStep.value = STEPS[5]
    } else if (currentStep.value === STEPS[5]) {
        state.isCompleted = true
    }
}

const onClickBack = () => {
    if (currentStep.value === STEPS[1]) {
        currentStep.value = STEPS[0]
    } else if (currentStep.value === STEPS[2]) {
        currentStep.value = STEPS[1]
    } else if (currentStep.value === STEPS[3]) {
        currentStep.value = STEPS[2]
    } else if (currentStep.value === STEPS[4]) {
        currentStep.value = STEPS[3]
    } else if (currentStep.value === STEPS[5]) {
        currentStep.value = STEPS[4]
    }
}
</script>
