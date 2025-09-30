<template>
  <div class="quiz-footer">
    <div class="content">
      <div class="flex items-center w-full">
        <custom-button variant="outline" shape="square">
          <svg-icon name="icon_previous" class="w-3 h-3 mr-2" />
          <span>上一張</span>
        </custom-button>
        <custom-button variant="outline" shape="square" class="ml-auto">
          <span>下一張</span>
          <svg-icon name="icon_next" class="w-3 h-3 ml-2" />
        </custom-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.quiz-footer {
  @apply w-full mx-auto;
  @apply bg-white;
  @apply px-3 shadow-sm;
}

.quiz-footer .content {
  @apply max-w-screen-lg mx-auto leading-none;
  @apply flex items-center py-4 text-gray-360;
}
</style>
