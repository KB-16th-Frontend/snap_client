import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: /** @type {null | {
      id: string,
      nickname: string,
      totalSpend: number,
      presentValueScore: number
    }} */ (null),
        isLoggedIn: false,
    }),
    actions: {
        setUserInfo(userInfo) {
            this.userInfo = userInfo
            this.isLoggedIn = true
        },
        clearUserInfo() {
            this.userInfo = null
            this.isLoggedIn = false
        },
    },
    getters: {
        getUserId(state) {
            return state.userInfo?.id || ''
        },
        getUserNickname(state) {
            return state.userInfo?.nickname || ''
        },
        getTotalSpend(state) {
            return state.userInfo?.totalSpend || 0
        },
        getPresentValueScore(state) {
            return state.userInfo?.presentValueScore || 0
        },
    },
})

export default useUserStore
