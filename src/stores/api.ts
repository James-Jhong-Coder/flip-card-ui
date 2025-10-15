import { defineStore } from 'pinia';

interface ApiState {
  requestQueue: string[];
}

export const useApiStore = defineStore('api', {
  state: (): ApiState => ({
    requestQueue: [],
  }),
  getters: {
    apiRequestingCount(state) {
      return state.requestQueue.length;
    },
  },
  actions: {
    pushQueue({ uuid }: { uuid: string }) {
      this.requestQueue.push(uuid);
    },
    removeQueueByUUID({ targetUUID }: { targetUUID: string }) {
      this.requestQueue = this.requestQueue.filter((uuid) => uuid !== targetUUID);
    },
  },
});
