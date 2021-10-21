import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiConfig } from 'utils/constant';

const axiosInstance = axios.create({
  baseURL: ApiConfig.baseApiUrl,
  timeout: Number(ApiConfig.timeOut)
});

axiosInstance.interceptors.request.use(
  async (req: AxiosRequestConfig) => {
    req.headers = req.headers || {};
    req.headers.Authorization = `Bearer ${ApiConfig.accessToken}`;
    return req;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
