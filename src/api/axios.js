import axios from 'axios';

const BASE_URL = 'http://localhost/storecart/';

export default axios.create({
    baseURL: BASE_URL
});


export const privateAxios = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'applocation/json'},
    //withCredentials: true
});
