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
    <span class="px-3">{{ title }}</span>
    <div class="flex-1">
      <BaseSelect v-model="modelValue" class="base-select" :options="options" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";

.filter-box {
  @apply flex items-center;
  @apply border border-gray-390;
  @apply rounded-lg;
}
.filter-box :deep(.base-select .p-select) {
  @apply !border-none;
  @apply !rounded-none;
  @apply !rounded-r-lg;
  border-left: 1px solid black !important;
}
.filter-box :deep(.base-select .p-select-dropdown) {
  @apply !border-none;
  @apply !rounded-r-lg;
}
</style>
