<script setup lang="ts">
import { useStudyStore } from '@/stores/study';
import { computed, ref, onBeforeUnmount } from 'vue';
const studyStore = useStudyStore();

const onGetStudyFlashCards = () => {
  studyStore.getStudyFlashCards({
    language: studyStore.selectedLanguage,
  });
};

const computedFlashCards = computed(() => {
  return studyStore.studyFlashCards.rows || [];
});

onGetStudyFlashCards();

onBeforeUnmount(() => {
  studyStore.$reset();
});
</script>

<template>
  <div class="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-100">
    <QuizHeader />
    <div class="section">
      <div class="quiz-content">
        <FlipCard
          v-if="computedFlashCards.length > 0"
          :back="computedFlashCards[studyStore.currentCardIndex]?.back"
          :front="computedFlashCards[studyStore.currentCardIndex]?.front"
          class="w-full h-full"
        />
      </div>
    </div>
    <QuizFooter />
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.section {
  @apply w-full flex-1 mx-auto;
  @apply px-3 py-4 flex flex-col;
}

.quiz-content {
  @apply w-full flex-1;
  @apply max-w-screen-lg mx-auto leading-none;
  @apply flex items-center justify-center;
}
</style>
