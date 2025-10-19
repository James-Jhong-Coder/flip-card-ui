import { GET_FLASH_CARD_STUDY } from '@/apis/api';
import type { GetStudyFlashCardsQuery, GetStudyFlashCardsResponse } from '@/apis/types';
import { defineStore } from 'pinia';

interface StudyState {
  selectedLanguage: string;
  currentCardIndex: number;
  studyFlashCards: GetStudyFlashCardsResponse;
}

export const useStudyStore = defineStore('study', {
  state: (): StudyState => ({
    selectedLanguage: 'EN',
    currentCardIndex: 0,
    studyFlashCards: {
      rows: [],
    },
  }),
  actions: {
    updateState(payload: Partial<StudyState>) {
      this.$patch(payload);
    },
    getStudyFlashCards(payload: GetStudyFlashCardsQuery) {
      GET_FLASH_CARD_STUDY(payload).then((res) => {
        this.updateState({
          studyFlashCards: res.data,
        });
      });
    },
    moveToNextCard() {
      if (this.currentCardIndex < this.studyFlashCards.rows.length - 1) {
        this.currentCardIndex++;
      }
    },
    moveToPreviousCard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--;
      }
    },
  },
});
