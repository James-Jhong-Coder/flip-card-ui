import { defineStore, getActivePinia } from 'pinia';

interface Profile {
  token: string;
  email: string;
  name: string;
}
interface AccountState {
  profile: Profile;
}

export const useProfileStore = defineStore('profile', {
  state: (): AccountState => ({
    profile: {
      token: '',
      email: '',
      name: '',
    },
  }),
  actions: {
    updateState(payload: Partial<AccountState>) {
      this.$patch(payload);
    },
    logout() {
      const pinia = getActivePinia();
      console.log('pinia = ', pinia);
    },
  },
});
