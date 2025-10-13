import { defineStore } from 'pinia';

interface ProfileState {
  token?: string;
  email?: string;
  name?: string;
}

export const useProfileStore = defineStore('api', {
  state: (): ProfileState => ({
    token: '',
    email: '',
    name: '',
  }),
  actions: {
    updateState(payload: ProfileState) {
      this.$patch(payload);
    },
  },
});
