import { defineStore } from 'pinia'

// 다른 컴포넌트에서 사용할 수 있게 export해주고
// 가져온 defineStore()에 첫번째 파라미터로 다른 컴포넌트에서 쓸 이름 설정해주고 (='counter')
// 두번째 파라미터로 store에 관련된 옵션을 정의해주면 된다.
export const useCounterStore = defineStore('counter', {
    // 상태
    state: () => {},
    // computed
    getters: {},
    // method
    actions: {},
})

export const usePaymentsReportStore = defineStore('PaymentsReport', {
    state: () => ({
        month: 0,
        totalSpending: 0,
        goodSpending: 0,
        badSpending: 0,
        categorySpendings: [], // 예: [{ label: '식비', data: 30000 }]
    }),
    actions: {
        setReportData({ month, totalSpending, goodSpending, badSpending, categorySpendings }) {
            this.month = month
            this.totalSpending = totalSpending
            this.goodSpending = goodSpending
            this.badSpending = badSpending
            this.categorySpendings = categorySpendings
        },
    },
})
