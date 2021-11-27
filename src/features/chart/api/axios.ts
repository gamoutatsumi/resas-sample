import axios from 'axios';

const api = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp/api/v1',
  timeout: 30000,
  headers: {
    'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY as string,
  },
});

export default api;
