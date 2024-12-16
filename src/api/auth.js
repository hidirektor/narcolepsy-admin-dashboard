import httpClient from './utils/httpClient';

const authApi = {
    login: (data) => httpClient.post('auth/sign-in', data),
    register: (data) => httpClient.post('auth/sign-up', data),
    changePassword: (data) => httpClient.post('auth/change-password', data),
    sendOtp: (data) => httpClient.post('auth/send-otp', data),
    resetPassword: (data) => httpClient.post('auth/reset-password', data),
    verifyOtp: (data) => httpClient.post('auth/verify-otp', data),
};

export default authApi;