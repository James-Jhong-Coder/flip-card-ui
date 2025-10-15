import { defineStore } from 'pinia';
import { useApiStore } from '@/stores/api';
import { useDialogStore } from '@/stores/dialog';

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
    resetAllStore() {
      this.$reset();
      const apiStore = useApiStore();
      const dialogStore = useDialogStore();
      apiStore.$reset();
      dialogStore.$reset();
      localStorage.clear();
    },
    logout() {
      this.resetAllStore();
    },
  },
});
