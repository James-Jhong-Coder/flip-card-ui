import { defineStore } from 'pinia';
import { GET_FLASH_CARD_STATS } from '@/apis/api';
import type { CreateFlashCardPayload, GetFlashCardListQuery } from '@/apis/types';
import { POST_FLASH_CARD, GET_FLASH_CARD } from '@/apis/api';

interface Stats {
  total?: number;
  en?: number;
  jp?: number;
}

interface DashBoardState {
  stats: Stats;
  selectedLanguage: string;
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashBoardState => ({
    stats: {},
    selectedLanguage: 'EN',
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
