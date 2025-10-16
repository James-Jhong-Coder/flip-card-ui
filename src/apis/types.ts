export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  email: string;
  name: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface GET_FLASH_CARD_STATS_RESPONSE {
  total: number;
  en: number;
  jp: number;
}

export interface CreateFlashCardPayload {
  language: string;
  front: string;
  back: string;
}
