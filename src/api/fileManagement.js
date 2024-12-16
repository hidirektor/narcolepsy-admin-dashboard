import httpClient from './utils/httpClient';

const fileManagementApi = {
    uploadProfilePhoto: (formData) =>
        httpClient.post('file/upload-profile-photo', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }),
};

export default fileManagementApi;
