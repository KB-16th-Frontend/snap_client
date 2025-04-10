import { toRefs } from 'vue'
import { numberToKorean } from '@/utils/common'
import { useEditPaymentsStore } from '@/stores/payments' // store 경로 맞게 조정해줘

export const useAddPaymentsForm = (validate) => {
    const store = useEditPaymentsStore()
    const { transactionType, title, amount, date, spendType, categoryId, description } =
        toRefs(store)

    const onClickTransactionType = (type) => {
        store.onClickTransactionType(type)
        validate(transactionType.value, [
            (value) =>
                value !== null
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '수입/지출을 선택해 주세요!' },
        ])
    }

    const onChangeTitle = (e) => {
        store.onChangeTitle(e)
        validate(title.value, [
            (value) =>
                value.length > 1
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '2글자 이상 입력해 주세요!' },
        ])
    }

    const onChangeAmount = (e) => {
        store.onChangeAmount(e)
        validate(amount.value, [
            (value) =>
                value > 0
                    ? { isValid: true, guideMessage: numberToKorean(amount.value) }
                    : { isValid: false, errorMessage: '0보다 큰 금액을 입력해 주세요!' },
        ])
    }

    const onChangeDate = (e) => {
        store.onChangeDate(e)
        validate(date.value, [
            (value) =>
                new Date(value) <= new Date()
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '오늘 날짜 이후는 입력이 불가해요!' },
        ])
    }

    const onChangeDescription = (e) => {
        store.onChangeDescription(e)
        validate(description.value, [
            (value) =>
                value.length <= 20
                    ? { isValid: true }
                    : {
                          isValid: false,
                          errorMessage: `최대 20자까지 입력 가능해요! (현재 ${value.length}자)`,
                      },
        ])
    }

    const onSelectCategory = (category) => {
        store.onClickCategory(category)
        validate(categoryId.value, [
            (value) =>
                value.length > 0
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '카테고리를 선택해 주세요!' },
        ])
    }

    const onSelectSpendType = (type) => {
        store.onClickSpendType(type)
        validate(spendType.value, [
            (value) =>
                value !== null
                    ? { isValid: true }
                    : { isValid: false, errorMessage: '가치/낭비 소비를 선택해 주세요!' },
        ])
    }

    return {
        onClickTransactionType,
        onChangeTitle,
        onChangeAmount,
        onChangeDate,
        onChangeDescription,
        onSelectCategory,
        onSelectSpendType,
    }
}
