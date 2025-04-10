import { defineStore } from 'pinia'

export const useEditPaymentsStore = defineStore('addPayments', {
    state: () => ({
        transactionType: null,
        title: '',
        amount: 0,
        date: '',
        spendType: null,
        categoryId: '',
        description: '',
    }),

    actions: {
        // 각 스텝에 따라 넘길 state change 함수 설정
        onClickTransactionType(transactionType) {
            this.transactionType = transactionType
        },
        onChangeTitle(e) {
            this.title = e.target.value
        },
        onChangeAmount(e) {
            this.amount = Number(e.target.value)
        },
        onChangeDate(e) {
            this.date = e.target.value
        },
        onChangeDescription(e) {
            this.description = e.target.value
        },
        onClickSpendType(spendType) {
            this.spendType = spendType
        },
        onClickCategory(categoryId) {
            this.categoryId = categoryId
        },
        reset() {
            this.transactionType = null
            this.title = ''
            this.amount = 0
            this.date = ''
            this.spendType = null
            this.categoryId = ''
            this.description = ''
        },
    },

    getters: {
        isValidTransactionType: (state) => {
            return state.transactionType !== null
        },
        isValidTitle: (state) => {
            return state.title.length > 1
        },
        isValidAmount: (state) => {
            return state.amount > 0
        },
        isValidDate: (state) => {
            return new Date(state.date) <= new Date()
        },
        isValidSpendType: (state) => {
            return state.spendType !== null
        },
        isValidCategory: (state) => {
            return state.categoryId !== ''
        },
    },
})
