import { defineStore } from 'pinia';
import { GET_FLASH_CARD_STATS } from '@/apis/api';
import type {
  CreateFlashCardPayload,
  FlashCardListResponse,
  GetFlashCardListQuery,
  GetFlashCardStatsResponse,
} from '@/apis/types';
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
    getFlashCardList(query: GetFlashCardListQuery) {
      GET_FLASH_CARD({
        ...query,
        language: query.language === 'all' ? null : query.language,
      }).then((res) => {
        this.updateState({
          flashCardList: res.data,
        });
      });
    },
  },
});
