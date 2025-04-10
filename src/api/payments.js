import { instance } from './common'

export const fetchStatistics = async (request) => {
    try {
        const response = await instance.get('/transaction', {
            ...request,
        })
        return response.data
    } catch (e) {
        console.log('getStatistics 요청 실패', e)
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
