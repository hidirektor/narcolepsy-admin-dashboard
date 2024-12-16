import httpClient from './utils/httpClient';

const supportTicketsApi = {
    createTicket: (data) => httpClient.post('support-tickets/create-ticket', data),
    replyTicket: (data) => httpClient.post('support-tickets/reply-ticket', data),
    deleteTicket: (id) => httpClient.delete(`support-tickets/delete-ticket/${id}`),
    getAll: () => httpClient.get('support-tickets/get-all'),
};

export default supportTicketsApi;
