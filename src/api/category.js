import { instance } from './common'

export const getIncomeCategoryAPI = async () => {
    try {
        // const response = await instance.get('/test')
        // 데이터 정제가 필요한 경우 여기서 정제
        const response = {
            data: [
                { id: '17', transactionType: 'income', name: '용돈', emoji: '🙇‍♀️' },
                { id: '18', transactionType: 'income', name: '급여', emoji: '💰' },
                { id: '19', transactionType: 'income', name: '금융소득', emoji: '🏦' },
                { id: '20', transactionType: 'income', name: '사업소득', emoji: '💵' },
                { id: '21', transactionType: 'income', name: '지원금', emoji: '🍯' },
                { id: '22', transactionType: 'income', name: '기타', emoji: '#️⃣' },
            ],
        }
        return response.data
    } catch (e) {
        // 인터셉터에서 처리한 에러 외의 로깅 수행
        console.log('getSampleList 요청 실패', e)
    }
}

export const getSpendingCategoryAPI = async () => {
    try {
        const response = {
            data: [
                { id: '1', transactionType: 'spending', name: '카페', emoji: '☕' },
                { id: '2', transactionType: 'spending', name: '식비', emoji: '🍽' },
                { id: '3', transactionType: 'spending', name: '교통', emoji: '🚗' },
                { id: '4', transactionType: 'spending', name: '의료', emoji: '🏥' },
                { id: '5', transactionType: 'spending', name: '편의점/마트', emoji: '🛒' },
                { id: '6', transactionType: 'spending', name: '통신/주거비', emoji: '🪙' },
                { id: '7', transactionType: 'spending', name: '보험/세금', emoji: '💵' },
                { id: '8', transactionType: 'spending', name: '여행', emoji: '🧳' },
                { id: '9', transactionType: 'spending', name: '쇼핑', emoji: '🛍' },
                { id: '10', transactionType: 'spending', name: '교육', emoji: '✍️' },
                { id: '11', transactionType: 'spending', name: '유흥', emoji: '🍻' },
                { id: '12', transactionType: 'spending', name: '미용', emoji: '💇' },
                { id: '13', transactionType: 'spending', name: '반려동물', emoji: '🐶' },
                { id: '14', transactionType: 'spending', name: '취미/여가', emoji: '🎟' },
                { id: '15', transactionType: 'spending', name: '기부/후원', emoji: '❤' },
                { id: '16', transactionType: 'spending', name: '기타', emoji: '#️⃣' },
            ],
        }
        return response.data
    } catch (e) {
        // 인터셉터에서 처리한 에러 외의 로깅 수행
        console.log('getSampleList 요청 실패', e)
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
