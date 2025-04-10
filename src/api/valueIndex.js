import { instance } from './common'

/** @types date는 부르고자 하는 날짜다. */
export const getValueIndex = async (request) => {
    try {
        const response = await instance.get('/valueIndex', {
            params: request, // ✅ 쿼리로 넘김
        })
        // 데이터 정제가 필요한 경우 여기서 정제
        return response.data
    } catch (e) {
        // 인터셉터에서 처리한 에러 외의 로깅 수행
        console.log('getSampleList 요청 실패', e)
    }
}
