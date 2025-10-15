import { defineStore } from 'pinia';
import { GET_FLASH_CARD_STATS } from '@/apis/api';

interface Stats {
  total?: number;
  en?: number;
  jp?: number;
}

interface DashBoardState {
  stats: Stats;
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashBoardState => ({
    stats: {},
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
  },
});
