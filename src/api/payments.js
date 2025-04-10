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
