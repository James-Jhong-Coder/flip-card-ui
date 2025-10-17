import { defineStore } from 'pinia';
import { GET_FLASH_CARD_STATS } from '@/apis/api';
import type {
  CreateFlashCardPayload,
  GetFlashCardListQuery,
  GetFlashCardStatsResponse,
} from '@/apis/types';
import { POST_FLASH_CARD, GET_FLASH_CARD } from '@/apis/api';

interface DashBoardState {
  stats: GetFlashCardStatsResponse;
  searchParams: GetFlashCardListQuery;
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
    getFlashCardList(query: GetFlashCardListQuery) {
      GET_FLASH_CARD().then((res) => {
        this.updateState({});
      });
    },
  },
});
