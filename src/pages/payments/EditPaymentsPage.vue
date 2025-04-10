<style scoped></style>

<template>
    <DetailLayout :onBack="onClickBack">
        <!-- <div v-if=""></div> -->
        <div class="form-container">
            <transition :name="transitionName" mode="out-in">
                <component
                    :is="getStepComponent(currentStep)"
                    :key="currentStep"
                    v-bind="getStepProps(currentStep)"
                />
            </transition>
            <div v-if="!isSubmitted" class="position-absolute bottom-0 start-0 end-0 p-3">
                <BaseTypography size="2xl" class="text-center mb-4">{{
                    errorMessage.length > 0 ? '😵‍💫' : '🧐'
                }}</BaseTypography>
                <button
                    class="btn btn-primary btn-lg w-100"
                    :disabled="!isValidated"
                    @click="onClickNext"
                >
                    다음
                </button>
            </div>
            <div v-else class="position-absolute bottom-0 start-0 end-0 p-3">
                <BaseTypography size="2xl" class="text-center mb-4"> 🥳 </BaseTypography>
                <button
                    class="btn btn-primary btn-lg w-100"
                    :disabled="!isValidated"
                    @click="onClickNext"
                >
                    소비 기록 페이지로 가기
                </button>
            </div>
        </div>
    </DetailLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// TODO: useRoute를 사용하여 paymentId를 가져오고, 해당 id에 맞는 결제 정보를 가져와야 함
import { useRoute } from 'vue-router'

import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import DetailLayout from '@/components/layouts/DetailLayout.vue'
import SelectIncomeSpending from '@/components/payments/form/SelectIncomeSpending.vue'
import InputTitle from '@/components/payments/form/InputTitle.vue'
import InputAmount from '@/components/payments/form/InputAmount.vue'
import InputDate from '@/components/payments/form/InputDate.vue'
import SelectCategory from '@/components/payments/form/SelectCategory.vue'
import InputDescription from '@/components/payments/form/InputDescription.vue'
import SummaryAddedData from '@/components/payments/form/SummaryAddedData.vue'
import SelectIsValuableSpending from '@/components/payments/form/SelectIsValuableSpending.vue'

import { useAddPaymentsForm } from '@/hooks/forms/useAddPaymentsForm'
import { useFunnel } from '@/hooks/useFunnel'
import { useValidation } from '@/hooks/useValidation'

const STEPS = [
    '수입/지출 선택',
    '제목 입력',
    '금액 입력',
    '날짜 선택',
    '카테고리 선택',
    '상세설명 입력',
    '추가 완료',
]

const EXTRA_STEPS = ['가치/낭비 소비 선택']

const route = useRoute()
const paymentId = route.params.id
const router = useRouter()
const isSubmitted = ref(false)

// 훅 사용
const { currentStep, direction, nextStep, prevStep, setStep } = useFunnel(STEPS)
const { isValidated, errorMessage, guideMessage, validate } = useValidation()
const {
    state,
    onClickTransactionType,
    onChangeTitle,
    onChangeAmount,
    onChangeDate,
    onChangeDescription,
    onSelectCategory,
    onSelectSpendType,
} = useAddPaymentsForm(validate)

const transitionName = computed(() =>
    direction.value === 'forward' ? 'slide-left' : 'slide-right',
)

// 현재 스텝에 따라 보여줄 컴포넌트 설정
const getStepComponent = (step) => {
    if (step === STEPS[0]) return SelectIncomeSpending
    if (step === STEPS[1]) return InputTitle
    if (step === STEPS[2]) return InputAmount
    if (step === STEPS[3]) return InputDate
    if (step === STEPS[4]) return SelectCategory
    if (step === STEPS[5]) return InputDescription
    if (step === STEPS[6]) return SummaryAddedData
    if (step === EXTRA_STEPS[0]) return SelectIsValuableSpending
}

// 각 스텝에 따라 넘길 props 설정
const getStepProps = (step) => {
    if (step === STEPS[0]) {
        return {
            transactionType: state.transactionType,
            onClick: onClickTransactionType,
        }
    } else if (step === STEPS[1]) {
        return {
            transactionType: state.transactionType,
            title: state.title,
            onChange: onChangeTitle,
            errorMessage: errorMessage.value,
        }
    } else if (step === STEPS[2]) {
        return {
            transactionType: state.transactionType,
            amount: state.amount,
            onChange: onChangeAmount,
            errorMessage: errorMessage.value,
            guideMessage: guideMessage.value,
        }
    } else if (step === STEPS[3]) {
        return {
            transactionType: state.transactionType,
            date: state.date,
            onChange: onChangeDate,
            errorMessage: errorMessage.value,
        }
    } else if (step === STEPS[4]) {
        return {
            transactionType: state.transactionType,
            date: state.date,
            selectedCategoryId: state.categoryId,
            onClick: onSelectCategory,
            errorMessage: errorMessage.value,
        }
    } else if (step === STEPS[5]) {
        return {
            description: state.description,
            onChange: onChangeDescription,
            errorMessage: errorMessage.value,
            guideMessage: guideMessage.value,
        }
    } else if (step === EXTRA_STEPS[0]) {
        return {
            spendType: state.spendType,
            onClick: onSelectSpendType,
        }
    } else {
        return {
            transactionType: state.transactionType,
            title: state.title,
            amount: state.amount,
            date: state.date,
            categoryId: state.categoryId,
            description: state.description,
        }
    }
}

// 다음 버튼 클릭 처리
const onClickNext = () => {
    if (currentStep.value === STEPS[4] && state.transactionType === 'spending') {
        setStep(EXTRA_STEPS[0])
        return
    }
    if (currentStep.value === STEPS[5] && state.transactionType === 'income') {
        // TODO: API 호출
        console.log('수입 API 호출')
        isSubmitted.value = true
        setStep(STEPS[6])
        return
    }
    if (currentStep.value === EXTRA_STEPS[0]) {
        // TODO: API 호출
        console.log('소비 API 호출')
        isSubmitted.value = true
        setStep(STEPS[6])
        return
    }
    if (currentStep.value === STEPS[6]) {
        router.push({ name: 'payments' })
        return
    }
    if (isValidated.value) {
        isValidated.value = false
        nextStep()
    }
}

// 뒤로 가기 버튼 클릭 처리
const onClickBack = () => {
    if (currentStep.value === STEPS[0] || currentStep.value === STEPS[6]) {
        router.back()
        return
    }

    prevStep()
}

// onMounted(() => {
//     if (paymentId) {
//     }
// })
</script>
