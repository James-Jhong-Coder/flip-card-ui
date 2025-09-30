<template>
  <div class="progress-bar">
    <div class="current-progress"></div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.progress-bar {
  @apply w-full relative;
  @apply h-2 rounded-2xl relative;
  @apply bg-gray-650/20;
  @apply overflow-hidden;
}

.current-progress {
  @apply absolute inset-0;
  @apply bg-gray-650 rounded-2xl;
  transition: transform 0.2s;
  transform: translateX(-10%);
}
</style>
