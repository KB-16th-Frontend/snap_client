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
