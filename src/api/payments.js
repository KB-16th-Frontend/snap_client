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
