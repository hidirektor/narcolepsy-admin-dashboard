import httpClient from './utils/httpClient';

const comicCategoryApi = {
    getAll: () => httpClient.get('comic-categories/get-all'),
    getById: (id) => httpClient.get(`comic-categories/get/${id}`),
    create: (data) => httpClient.post('comic-categories/create-category', data),
    edit: (data) => httpClient.post('comic-categories/edit-category', data),
    delete: (id) => httpClient.delete(`comic-categories/delete-category/${id}`),
    confirmDelete: (data) => httpClient.post('comic-categories/confirm-delete-category', data),
};

export default comicCategoryApi;
