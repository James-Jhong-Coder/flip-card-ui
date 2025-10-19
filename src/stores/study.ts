import { defineStore } from 'pinia';

interface StudyState {
  selectedLanguage: string;
}

export const useStudyStore = defineStore('study', {
  state: (): StudyState => ({
    selectedLanguage: 'EN',
  }),
  actions: {
    updateState(payload: Partial<StudyState>) {
      this.$patch(payload);
    },
  },
});
