import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiConfig } from './constant';

const client = axios.create({
  baseURL: ApiConfig.baseApiUrl,
  timeout: Number(ApiConfig.timeOut)
});

client.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.params = config.params || {};
    config.params.api_key = ApiConfig.apiKey;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default client;
