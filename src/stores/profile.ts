import { defineStore } from 'pinia';
import { useApiStore } from '@/stores/api';
import { useDialogStore } from '@/stores/dialog';
import { useStudyStore } from '@/stores/study';

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
      const studyStore = useStudyStore();
      apiStore.$reset();
      dialogStore.$reset();
      studyStore.$reset();
      localStorage.clear();
    },
    logout() {
      this.resetAllStore();
    },
  },
});
