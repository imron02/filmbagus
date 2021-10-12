import { api } from 'api/api';
import axiosInstance from 'api/axios.config';
import { AxiosResponse } from 'axios';

interface ResponseSuccessLoginInterface {
  success: boolean;
  expires_at: string;
  request_token: string;
}

interface LoginPayloadInterface {
  username: string;
  password: string;
  request_token: string;
}

export function fetchToken() {
  return axiosInstance
    .get(api.auth.getToken)
    .then((res: AxiosResponse<ResponseSuccessLoginInterface>) => Promise.resolve(res.data))
    .catch((e) => Promise.reject(e));
}

export function postLogin(body: LoginPayloadInterface) {
  return axiosInstance
    .post(api.auth.login, body)
    .then((res: AxiosResponse<ResponseSuccessLoginInterface | LoginPayloadInterface>) =>
      Promise.resolve(res.data)
    )
    .catch((e) => Promise.reject(e));
}
