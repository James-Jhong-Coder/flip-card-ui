<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useQuiz } from '@/hook/useQuiz';
const { selectedLanguage } = useQuiz();
const router = useRouter();
const onBackToDashboard = () => {
  router.replace({
    name: 'dashboard',
  });
};
</script>

<template>
  <div class="quiz-header">
    <div class="content">
      <div class="flex flex-col w-full">
        <div class="flex items-center">
          <CustomButton variant="outline" shape="square" @click="onBackToDashboard">
            <SvgIcon name="icon_home" class="w-3 h-3" />
          </CustomButton>
          <QuizProgress class="ml-3" />
          <LanguageTag :tag="selectedLanguage" class="ml-3" />
          <FullScreenButton class="ml-auto" />
        </div>
        <QuizProgressBar class="mt-3" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.quiz-header {
  @apply w-full mx-auto;
  @apply bg-white;
  @apply px-3 shadow-sm;
}

.quiz-header .content {
  @apply max-w-screen-lg mx-auto leading-none;
  @apply flex items-center py-4 text-gray-360;
}
</style>
