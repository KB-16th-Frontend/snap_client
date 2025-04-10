import useUserStore from '@/stores/auth'
import { instance } from './common'
import { setUserLocalStorage } from '@/utils/token'

export const getUserInfo = async (id, password) => {
    try {
        const response = await instance.get(`/member/${id}`)
        if (password && response.data.password !== password) {
            alert('비밀번호가 올바르지 않습니다.')
            return null
        }
        // Pinia store에 사용자 정보 저장
        const userStore = useUserStore()
        const userInfo = {
            id: response.data.id,
            nickname: response.data.nickname,
            totalSpend: response.data.totalSpend,
            presentValueScore: response.data.presentValueScore,
        }
        userStore.setUserInfo(userInfo)
        // 로컬 스토리지에 사용자 정보 저장
        setUserLocalStorage(userInfo.id)
        // 사용자 정보 반환
        return userInfo
    } catch (error) {
        console.error('Error fetching user info:', error)
        throw error
    }
}
