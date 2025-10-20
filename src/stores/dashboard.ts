import { defineStore } from 'pinia';
import { DELETE_FLASH_CARD, GET_FLASH_CARD_STATS, PATCH_FLASH_CARD } from '@/apis/api';
import type {
  CreateFlashCardPayload,
  DeleteFlashCardPayload,
  FlashCardListResponse,
  GetFlashCardListQuery,
  GetFlashCardStatsResponse,
  UpdateFlashCardPayload,
} from '@/apis/types';
import { DEFAULT_ROWS_PER_PAGE } from '@/const/common';
import { POST_FLASH_CARD, GET_FLASH_CARD } from '@/apis/api';

interface DashBoardState {
  stats: GetFlashCardStatsResponse;
  searchParams: GetFlashCardListQuery;
  flashCardList?: FlashCardListResponse | null;
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashBoardState => ({
    stats: {
      total: 0,
      jp: 0,
      en: 0,
    },
    searchParams: {
      language: null,
      front: '',
      back: '',
      page: 1,
      limit: DEFAULT_ROWS_PER_PAGE,
    },
    flashCardList: {
      page: 1,
      limit: 20,
      count: 0,
      items: [],
    },
  }),
  getters: {},
  actions: {
    updateState(payload: Partial<DashBoardState>) {
      this.$patch(payload);
    },
    getFlashCardStats() {
      GET_FLASH_CARD_STATS().then((res) => {
        this.updateState({
          stats: res.data,
        });
      });
    },
    createFlashCard(payload: CreateFlashCardPayload) {
      return POST_FLASH_CARD(payload).then(() => {
        this.getFlashCardStats();
      });
    },
    updateFlashCard(payload: UpdateFlashCardPayload) {
      return PATCH_FLASH_CARD(payload).then(() => {
        this.getFlashCardList();
      });
    },
    deleteFlashCard(payload: DeleteFlashCardPayload) {
      return DELETE_FLASH_CARD(payload).then(() => {
        this.getFlashCardList();
      });
    },
    getFlashCardList() {
      console.log('getFlashCardList = ', this.searchParams);
      GET_FLASH_CARD({
        language: this.searchParams.language === 'all' ? null : this.searchParams.language,
        front: this.searchParams.front,
        back: this.searchParams.back,
        page: this.searchParams.page,
        limit: this.searchParams.limit,
      }).then((res) => {
        this.updateState({
          flashCardList: res.data,
        });
      });
    },
  },
});
