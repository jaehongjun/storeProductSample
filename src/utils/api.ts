import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: 'http://api.example.com', // API의 기본 URL 설정
    timeout: 5000, // 요청이 타임아웃되는 시간 설정 (옵션)
});

// 요청 전에 실행되는 인터셉터
api.interceptors.request.use(
    (config: any) => {
        // 요청을 보내기 전에 필요한 작업 수행
        // 예: 헤더에 인증 토큰 추가 등
        return config;
    },
    (error: AxiosError) => {
        // 요청이 실패한 경우에 대한 처리
        return Promise.reject(error);
    }
);

// 응답을 받은 후 실행되는 인터셉터
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // 응답을 받은 후 필요한 작업 수행
        return response;
    },
    (error: AxiosError) => {
        // 응답이 실패한 경우에 대한 처리
        return Promise.reject(error);
    }
);

export default api;
