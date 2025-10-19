<script setup lang="ts">
import { computed } from 'vue';
import type { QuizProgress } from '@/types/ui/quiz';
const props = withDefaults(defineProps<QuizProgress>(), {
  current: 1,
  total: 1,
});
const computedProgress = computed(() => {
  const ratio = Math.min((props.current) / props.total, 1); // 避免超過 100%
  return `translateX(${(ratio - 1) * 100}%)`;
});
</script>

<template>
  <div class="progress-bar">
    <div class="current-progress" :style="{ transform: computedProgress }"></div>
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
}
</style>
