import instance from '@/apis/instance';
import endPoints from '@/apis/endPoints';
import type { LoginPayload, LoginResponse, RegisterPayload } from './types';
import type { AxiosResponse } from 'axios';

export const POST_AUTH_LOGIN = (payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> => {
  return instance.post<LoginResponse>(endPoints.AUTH_LOGIN, payload);
};

export const POST_AUTH_REGISTER = (payload: RegisterPayload) => {
  return instance.post(endPoints.AUTH_REGISTER, payload);
};

export const GET_USERS_PROFILE = (): Promise<AxiosResponse<LoginResponse>> => {
  return instance.get(endPoints.USERS_PROFILE);
};
