import axios from 'axios';

const BASE_URL = 'https://api-dev.reo.so/api/';

export const request = axios.create({ baseURL: BASE_URL });
