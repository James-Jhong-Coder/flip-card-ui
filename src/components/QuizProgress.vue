<script setup lang="ts">
import type { QuizProgress } from '@/types/ui/quiz';

withDefaults(defineProps<QuizProgress>(), {
  current: 1,
  total: 1,
});
</script>

<template>
  <div class="flex items-center text-sm font-bold">
    <span>{{ current }}</span>
    <span class="mx-2">/</span>
    <span>{{ total }}</span>
  </div>
</template>
