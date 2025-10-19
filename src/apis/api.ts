import instance from '@/apis/instance';
import endPoints from '@/apis/endPoints';
import type {
  CreateFlashCardPayload,
  DeleteFlashCardPayload,
  FlashCardItem,
  FlashCardListResponse,
  GetFlashCardListQuery,
  GetFlashCardStatsResponse,
  GetStudyFlashCardsQuery,
  GetStudyFlashCardsResponse,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  UpdateFlashCardPayload,
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

export const GET_FLASH_CARD_STATS = (): Promise<AxiosResponse<GetFlashCardStatsResponse>> => {
  return instance.get(endPoints.FLASH_CARD_STATS);
};

export const GET_FLASH_CARD = (
  query: GetFlashCardListQuery,
): Promise<AxiosResponse<FlashCardListResponse>> => {
  return instance.get(endPoints.FLASH_CARD, {
    params: query,
  });
};

export const POST_FLASH_CARD = (payload: CreateFlashCardPayload) => {
  return instance.post(endPoints.FLASH_CARD, payload);
};

export const PATCH_FLASH_CARD = (payload: UpdateFlashCardPayload) => {
  return instance.patch(endPoints.FLASH_CARD, payload);
};

export const DELETE_FLASH_CARD = (payload: DeleteFlashCardPayload) => {
  return instance.delete(endPoints.FLASH_CARD, {
    data: payload,
  });
};

export const GET_FLASH_CARD_STUDY = (
  query: GetStudyFlashCardsQuery,
): Promise<AxiosResponse<GetStudyFlashCardsResponse>> => {
  return instance.get(endPoints.FLASH_CARD_STUDY, { params: query });
};
