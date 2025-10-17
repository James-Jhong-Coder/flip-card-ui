<script setup lang="ts">
interface Props {
  title?: string;
  englishTitle?: string;
  total?: number | string;
}

defineProps<Props>();
</script>

<template>
  <BaseCard class="card">
    <div class="flex items-center">
      <span>{{ title }}</span>
      <div v-if="englishTitle" class="tag ml-auto">{{ englishTitle }}</div>
    </div>
    <div class="flex mt-6">
      <span class="text-2xl">{{ total }}</span>
    </div>
  </BaseCard>
</template>

<style scoped>
@reference "@/styles/global.css";
.card .tag {
  @apply bg-gray-480 text-sm leading-none;
  @apply rounded-md text-gray-650 px-3 py-1;
}
</style>
