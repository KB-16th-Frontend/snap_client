import { instance } from './common'

export const fetchCategories = async () => {
    try {
        const res = await instance.get('/categories')
        return res.data
    } catch (error) {
        console.error('카테고리 불러오기 실패:', error)
    }
}

export const getCategoryDetailAPI = async (categoryId) => {
    try {
        const response = await instance.get(`/categories/${categoryId}`)
        return response.data
    } catch (e) {
        // 인터셉터에서 처리한 에러 외의 로깅 수행
        console.log('getSampleList 요청 실패', e)
    }
}
