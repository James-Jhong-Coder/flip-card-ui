<script setup lang="ts">
import type { TabItem } from '@/types/ui/tabs';

interface Props {
  selectedTab: string | null;
  tabs: TabItem[];
}

defineProps<Props>();

const emits = defineEmits<{
  onSelectedTabHandler: [tab: TabItem];
}>();

const onSelectedTabHandler = (tab: TabItem) => {
  emits('onSelectedTabHandler', tab);
};
</script>

<template>
  <div class="tabs">
    <custom-button
      v-for="(item, index) in tabs"
      :key="index"
      class="custom-button"
      :is-active="item.value === selectedTab"
      variant="ghost"
      @click="onSelectedTabHandler(item)"
      >{{ item.text }}</custom-button
    >
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";

.tabs {
  @apply grid;
  @apply bg-gray-300 rounded-4xl py-1 px-2;
  grid-template-columns: max-content;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  gap: 0 0.5rem;
}
.tabs .custom-button {
  @apply text-xs;
}
</style>
