import httpClient from './utils/httpClient';

const userProfileApi = {
    getProfile: (data) => httpClient.post('user/get-profile', data),
    updateProfile: (data) => httpClient.post('user/update-profile', data),
};

export default userProfileApi;
