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

export interface GetFlashCardStatsResponse {
  total: number;
  en: number;
  jp: number;
}

export interface CreateFlashCardPayload {
  language: string;
  front: string;
  back: string;
}

export interface UpdateFlashCardPayload extends CreateFlashCardPayload {
  cardId?: number;
}

export interface DeleteFlashCardPayload {
  cardId?: number;
}

export interface GetFlashCardListQuery {
  language?: string | null;
  front?: string;
  back?: string;
  page: number;
  limit: number;
}

export interface FlashCardItem {
  rowNo: number;
  id: number;
  userId: number;
  language: string | null;
  front: string;
  back: string;
  createdAt: number;
  updatedAt: number;
}

export interface FlashCardListResponse {
  items: FlashCardItem[];
  page: number;
  limit: number;
  count: number;
}

export interface GetStudyFlashCardsQuery {
  language: string;
}

export interface GetStudyFlashCardsResponse {
  rows: FlashCardItem[];
}
