import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiConfig, ActionType } from './constant';
import { store } from '../redux/store';

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

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // On unauthorized error logout and navigate to AuthStack
    if (error?.response?.status === 401) {
      store.dispatch({ type: ActionType.LOGOUT });
    }

    return Promise.reject(error);
  }
);

export default client;
