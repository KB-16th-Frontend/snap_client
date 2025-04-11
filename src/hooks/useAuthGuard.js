import { useRouter } from 'vue-router'
import useUserStore from '@/stores/auth'
import { getUserLocalStorage, removeUserLocalStorage } from '@/utils/token'
import { getUserInfo } from '@/api/auth'

export async function useAuthGuard() {
    const router = useRouter()
    const userStore = useUserStore()

    const userId = getUserLocalStorage()

    if (userId) {
        try {
            const userInfo = await getUserInfo(userId)
            userStore.setUserInfo(userInfo)
            return true // 성공적으로 유저 정보를 불러옴
        } catch (error) {
            console.error('유저 정보 불러오기 실패:', error)
            userStore.removeUserInfo()
            removeUserLocalStorage()
            // 유저 정보 불러오기 실패 시, 로컬 스토리지에서 유저 정보 제거
            router.push('/')
            return false
        }
    } else {
        router.push('/')
        return false
    }
}
