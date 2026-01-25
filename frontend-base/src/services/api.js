import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://688b7cf42a52cabb9f51eeea.mockapi.io/api/teste/',
    timeout: 5000, // 5 seconds timeout
})