import { instance } from './common'

export const fetchSpendingTransaction = async (request) => {
    try {
        const response = await instance.get('/transaction', {
            params: {
                transactionType: 'spending',
                memberId: request.memberId,
            },
        })
        return response.data
    } catch (e) {
        console.error('fetchSpendingTransaction 요청 실패', e)
    }
}
