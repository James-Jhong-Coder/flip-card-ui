<script setup lang="ts">
import type { Option } from '@/types/ui/select';

interface Props {
  title: string;
  placeholder?: string;
  options?: Option[];
}
defineProps<Props>();
const modelValue = defineModel<string | number | null>({ default: null });
</script>

<template>
  <div class="filter-box">
    <span class="px-3 border-r border-r-lg border-r-gray-390 h-full flex items-center">{{ title }}</span>
    <div class="flex-1">
      <general-input v-model="modelValue" class="base-input" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";

.filter-box {
  @apply flex items-center;
  @apply border border-gray-390;
  @apply rounded-lg;
  @apply border-r rounded-r-lg;
}
.filter-box :deep(.base-input .input-box) {
  @apply !border-none;
  @apply rounded-none;
  @apply rounded-r-lg;
}
</style>
