<template>
  <div class="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-100">
    <QuizHeader />
    <div class="section">
      <div class="quiz-content">
        <FlipCard back="哈囉" front="hi" class="w-full h-full" />
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
