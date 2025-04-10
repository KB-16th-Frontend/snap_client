import { instance } from './common'

export const patchMemberName = async (id, name) => {
    try {
        const res = await instance.patch(`/member/${id}`, { nickname: name })
        return res.data
    } catch (error) {
        console.error('이름 수정 실패:', error)
    }
}
