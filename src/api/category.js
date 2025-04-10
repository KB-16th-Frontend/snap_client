import { instance } from './common'

export const fetchCategories = async () => {
    try {
        const res = await instance.get('/categories')
        return res.data
    } catch (error) {
        console.error('카테고리 불러오기 실패:', error)
    }
}
