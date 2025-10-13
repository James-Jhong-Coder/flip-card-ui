import instance from '@/apis/instance';
import endPoints from '@/apis/endPoints';
import type { LoginPayload, RegisterPayload } from './types';

export const POST_AUTH_LOGIN = (payload: LoginPayload) => {
  return instance.post(endPoints.AUTH_LOGIN, payload);
};

export const POST_AUTH_REGISTER = (payload: RegisterPayload) => {
  return instance.post(endPoints.AUTH_REGISTER, payload);
};
