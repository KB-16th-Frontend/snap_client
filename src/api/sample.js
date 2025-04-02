import { instance } from './common';

// TODO: api 요청은 아래와 같은 형식을 따라주세요.
export const getSampleList = async () => {
  try {
    const response = await instance.get('/test');
    // 데이터 정제가 필요한 경우 여기서 정제
    return response.data;
  } catch (e) {
    // 인터셉터에서 처리한 에러 외의 로깅 수행
    console.log('getSampleList 요청 실패', e);
  }
};
