import instance from '@/apis/instance';
import endPoints from '@/apis/endPoints';
import type {
  GET_FLASH_CARD_STATS_RESPONSE,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
} from './types';
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

export const GET_FLASH_CARD_STATS = (): Promise<AxiosResponse<GET_FLASH_CARD_STATS_RESPONSE>> => {
  return instance.get(endPoints.FLASH_CARD_STATS);
};

export const POST_FLASH_CARD = () => {
  return instance.post(endPoints.FLASH_CARD);
};

export const PATCH_FLASH_CARD = () => {
  return instance.patch(endPoints.FLASH_CARD);
};

export const DELETE_FLASH_CARD = () => {
  return instance.delete(endPoints.FLASH_CARD);
};
