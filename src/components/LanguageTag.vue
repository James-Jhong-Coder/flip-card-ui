<script setup lang="ts">
interface Props {
  tag: string;
}
defineProps<Props>();
</script>

<template>
  <div class="tag">
    <span>{{ tag }}</span>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.tag {
  @apply flex items-center;
  @apply bg-gray-680 leading-none text-sm text-white rounded-xl;
  @apply px-2 py-1;
}
</style>
