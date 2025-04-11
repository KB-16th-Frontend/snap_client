import { instance } from './common'

export const fetchTransaction = async (request) => {
    try {
        const response = await instance.get('/transaction', {
            params: {
                memberId: request.memberId,
            },
        })
        return response.data
    } catch (e) {
        console.error('fetchSpendingTransaction 요청 실패', e)
    }
}

export const fetchIncomeTransaction = async (request) => {
    try {
        const response = await instance.get('/transaction', {
            params: {
                transactionType: 'income',
                memberId: request.memberId,
            },
        })
        return response.data
    } catch (e) {
        console.error('fetchSpendingTransaction 요청 실패', e)
    }
}

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

export const fetchRecentTransaction = async () => {
    try {
        const response = await instance.get('/transaction', {
            params: {
                _limit: 3,
            },
        })
        return response.data
    } catch (e) {
        console.error('fetchRecentTransaction 요청 실패', e)
    }
}

export const getAllTransaction = async (type) => {
    try {
        const res = await instance.get('/transaction', {
            params: {
                transactionType: type,
            },
        })
        console.log('거래 내역 요청 성공:', res.data)
        return res.data
    } catch (e) {
        console.error('거래 내역 요청 실패:', e)
    }
}

export const fetchPaymentDetail = async (id) => {
    try {
        const response = await instance.get(`/transaction/${id}`)
        return response.data
    } catch (e) {
        console.log('getPaymentsDetail 요청 실패', e)
    }
}

export const postPaymentDetail = async (request) => {
    try {
        const response = await instance.post('/transaction', {
            ...request,
        })
        return response.data
    } catch (e) {
        console.log('postPaymentsDetail 요청 실패', e)
    }
}

export const patchPaymentDetail = async (id, request) => {
    try {
        const response = await instance.patch(`/transaction/${id}`, {
            ...request,
        })
        return response.data
    } catch (e) {
        console.log('patchPaymentsDetail 요청 실패', e)
    }
}
