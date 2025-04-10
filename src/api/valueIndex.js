import { instance } from './common'

// TODO: api 요청은 아래와 같은 형식을 따라주세요.
export const getValueIndex = async () => {
    try {
        // const dateQuery = `_sort=date&_order=desc`
        const response = await instance.get(`/valueIndex`)
        const rawData = response.data

        // const sorted = [...rawData].sort((a, b) => new Date(b.date) - new Date(a.date))

        // const todayValue = sorted[0]
        const todayValue = rawData[0]
        // const yesterdayValue = sorted[1]
        const yesterdayValue = rawData[1]
        return {
            todayValue,
            yesterdayValue,
        }
        // 데이터 정제가 필요한 경우 여기서 정제
    } catch (e) {
        // 인터셉터에서 처리한 에러 외의 로깅 수행
        console.log('getSampleList 요청 실패', e)
    }
}
