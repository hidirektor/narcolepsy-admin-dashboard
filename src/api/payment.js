import httpClient from './utils/httpClient';

const paymentApi = {
    startCheckout: (data) => httpClient.post('payment/start-checkout-form', data),
    verifyPayment: (id) => httpClient.get(`payment/verify-payment/${id}`),
    checkPayment: (id) => httpClient.post(`payment/check-payment/${id}`),
};

export default paymentApi;
