import { reactive } from 'vue'
import { numberToKorean } from '@/utils/common'

export const useAddPaymentsForm = (validate) => {
    const state = reactive({
        transactionType: null,
        title: '',
        amount: 0,
        date: '',
        spendType: null,
        categoryId: '',
        description: '',
    })

    // 각 스텝에 따라 넘길 state change 함수 설정
    const onClickTransactionType = (transactionType) => {
        state.transactionType = transactionType
        validate(state.transactionType, [
            (value) =>
                value !== null
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '수입/지출을 선택해 주세요!' },
        ])
    }

    const onChangeTitle = (e) => {
        state.title = e.target.value
        validate(state.title, [
            (value) =>
                value.length > 1
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '2글자 이상 입력해 주세요!' },
        ])
    }

    const onChangeAmount = (e) => {
        state.amount = Number(e.target.value)
        validate(state.amount, [
            (value) =>
                value > 0
                    ? { isValid: true, guideMessage: numberToKorean(state.amount) }
                    : {
                          isValid: false,
                          errorMessage: '0보다 큰 금액을 입력해 주세요!',
                      },
        ])
    }

    const onChangeDate = (e) => {
        state.date = e.target.value
        validate(state.date, [
            (value) =>
                new Date(value) <= new Date()
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '오늘 날짜 이후는 입력이 불가해요!' },
        ])
    }

    // 설명 입력 처리 (검증 포함)
    const onChangeDescription = (e) => {
        state.description = e.target.value
        validate(state.description, [
            (value) =>
                value.length <= 20
                    ? { isValid: true }
                    : {
                          isValid: false,
                          errorMessage: `최대 20자까지 입력 가능해요! (현재 ${value.length}자)`,
                      },
        ])
    }

    // 카테고리 선택 처리 (검증 포함)
    const onSelectCategory = (category) => {
        state.categoryId = category
        validate(state.categoryId, [
            (value) =>
                value.length > 0
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '카테고리를 선택해 주세요!' },
        ])
    }

    const onSelectSpendType = (spendType) => {
        state.spendType = spendType
        validate(state.spendType, [
            (value) =>
                value !== null
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '가치/낭비 소비를 선택해 주세요!' },
        ])
    }
    return {
        state,
        onClickTransactionType,
        onChangeTitle,
        onChangeAmount,
        onChangeDate,
        onChangeDescription,
        onSelectCategory,
        onSelectSpendType,
    }
}
