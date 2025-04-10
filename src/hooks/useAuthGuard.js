import { useRouter } from 'vue-router'
import useUserStore from '@/stores/auth'
import { getUserLocalStorage } from '@/utils/token'
import { getUserInfo } from '@/api/auth'

export async function useAuthGuard() {
    const router = useRouter()
    const userStore = useUserStore()

    const userId = getUserLocalStorage()
    console.log('userId:', userId)

    if (userId) {
        try {
            const userInfo = await getUserInfo(userId)
            userStore.setUserInfo(userInfo)
            return true // 성공적으로 유저 정보를 불러옴
        } catch (error) {
            console.error('유저 정보 불러오기 실패:', error)
            router.push('/')
            return false
        }
    } else {
        router.push('/')
        return false
    }
}
