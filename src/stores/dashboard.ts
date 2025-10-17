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
    getFlashCardList() {
      GET_FLASH_CARD({
        language: this.searchParams.language === 'all' ? null : this.searchParams.language,
        front: this.searchParams.front,
        back: this.searchParams.back,
      }).then((res) => {
        this.updateState({
          flashCardList: res.data,
        });
      });
    },
  },
});
