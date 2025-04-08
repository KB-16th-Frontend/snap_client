<style scoped>
.form-container {
    padding: 2rem 1rem 6rem;
}
/* 앞으로 가는 애니메이션 (오른쪽 -> 왼쪽) */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
}
.slide-left-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

/* 뒤로 가는 애니메이션 (왼쪽 -> 오른쪽) */
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
}
.slide-right-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>

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
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
// TODO: useRoute를 사용하여 paymentId를 가져오고, 해당 id에 맞는 결제 정보를 가져와야 함
// import { useRoute } from 'vue-router'

import { numberToKorean } from '@/utils/common.js'

import DetailLayout from '@/components/layouts/DetailLayout.vue'
import SelectIncomeSpending from '@/components/payments/SelectIncomeSpending.vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import InputTitle from '@/components/payments/InputTitle.vue'
import InputAmount from '@/components/payments/InputAmount.vue'
import InputDate from '@/components/payments/InputDate.vue'
import SelectCategory from '@/components/payments/SelectCategory.vue'
import InputDescription from '@/components/payments/InputDescription.vue'
import SummaryAddedData from '@/components/payments/SummaryAddedData.vue'

const STEPS = [
    '수입/지출 선택',
    '제목 입력',
    '금액 입력',
    '날짜 선택',
    '카테고리 선택',
    '상세설명 입력',
    '추가 완료',
]

const router = useRouter()
// const route = useRoute()
// const paymentId = route.params.id
const currentStep = ref('수입/지출 선택')
const isValidated = ref(false)
const errorMessage = ref('')
const guideMessage = ref('')
const direction = ref('forward') // 또는 'backward'
const isSubmitted = ref(false)

const state = reactive({
    transactionType: null,
    title: '',
    amount: 0,
    date: '',
    categoryId: '',
    description: '',
    isCompleted: false,
})

const transitionName = computed(() =>
    direction.value === 'forward' ? 'slide-left' : 'slide-right',
)

// 현재 스텝에 따라 보여줄 컴포넌트
const getStepComponent = (step) => {
    if (step === STEPS[0]) return SelectIncomeSpending
    if (step === STEPS[1]) return InputTitle
    if (step === STEPS[2]) return InputAmount
    if (step === STEPS[3]) return InputDate
    if (step === STEPS[4]) return SelectCategory
    if (step === STEPS[5]) return InputDescription
    if (step === STEPS[6]) return SummaryAddedData
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

// step 1
const onClickTransactionType = (transactionType) => {
    state.transactionType = transactionType
    if (state.transactionType !== null) {
        isValidated.value = true
    } else {
        isValidated.value = false
    }
}

// step 2
const onChangeTitle = (e) => {
    state.title = e.target.value
    if (state.title.length > 1) {
        isValidated.value = true
        errorMessage.value = ''
    } else {
        isValidated.value = false
        errorMessage.value = '2글자 이상 입력해 주세요!'
    }
}

// step 3
const onChangeAmount = (e) => {
    state.amount = Number(e.target.value)
    if (state.amount > 0) {
        isValidated.value = true
        errorMessage.value = ''
        guideMessage.value = numberToKorean(state.amount)
    } else {
        isValidated.value = false
        errorMessage.value = '0보다 큰 금액을 입력해 주세요!'
    }
}

// step 4
const onChangeDate = (e) => {
    state.date = e.target.value
    console.log(state.date)
    if (state.date.length > 0) {
        const date = new Date(state.date)
        const today = new Date()
        if (date > today) {
            isValidated.value = false
            errorMessage.value = '오늘 날짜 이후는 입력이 불가해요!'
            return
        } else {
            isValidated.value = true
            errorMessage.value = ''
        }
    }
}

// step 5
const onChangeDescription = (e) => {
    state.description = e.target.value
    if (state.description.length < 21) {
        isValidated.value = true
        guideMessage.value = state.description.length ? `현재 ${state.description.length}자` : ''
        errorMessage.value = ''
    } else {
        isValidated.value = false
        guideMessage.value = ''
        errorMessage.value = `최대 20자까지 입력이 가능해요! (현재 ${state.description.length}자)`
    }
}

const onSelectCategory = (category) => {
    state.categoryId = category
    if (state.categoryId.length > 0) {
        isValidated.value = true
        errorMessage.value = ''
    } else {
        isValidated.value = false
    }
}

const onClickNext = () => {
    const currentStepIndex = STEPS.indexOf(currentStep.value)

    if (currentStepIndex === 4) {
        isValidated.value = true
    } else if (currentStepIndex === 5) {
        isValidated.value = true
        // TODO: API 호출
        isSubmitted.value = true
    } else if (currentStepIndex === 6) {
        isSubmitted.value = true
        router.push({
            name: 'payments',
        })
    } else {
        isValidated.value = false
    }

    currentStep.value = STEPS[currentStepIndex + 1]
    direction.value = 'forward'
    errorMessage.value = ''
    guideMessage.value = ''
}

const onClickBack = () => {
    const currentStepIndex = STEPS.indexOf(currentStep.value)
    if (currentStepIndex === 0 || currentStepIndex === 6) {
        router.go(-1)
        return
    } else {
        currentStep.value = STEPS[currentStepIndex - 1]
        isValidated.value = false
        errorMessage.value = ''
    }

    direction.value = 'backward'
    isValidated.value = true
    errorMessage.value = ''
    guideMessage.value = ''
}
</script>
