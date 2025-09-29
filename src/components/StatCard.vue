<script setup lang="ts">
interface Props {
  title?: string;
  englishTitle?: string;
  total?: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="flex items-center">
      <span>{{ title }}</span>
      <div v-if="englishTitle" class="tag ml-auto">{{ englishTitle }}</div>
    </div>
    <div class="flex mt-6">
      <span class="text-2xl">0</span>
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.card .tag {
  @apply bg-gray-480 text-sm leading-none;
  @apply rounded-md text-gray-650 px-3 py-1;
}
</style>
