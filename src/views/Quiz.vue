<template>
  <div class="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-100">
    <QuizHeader />
    <div class="section">
      <div class="quiz-content">fdsf</div>
    </div>
    <QuizFooter />
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.section {
  @apply w-full flex-1 mx-auto;
  @apply px-3 py-4;
}

.quiz-content {
  @apply w-full;
  @apply max-w-screen-lg mx-auto leading-none;
}
</style>
