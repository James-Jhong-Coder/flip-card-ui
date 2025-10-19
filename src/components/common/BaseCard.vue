<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";

.base-card {
  @apply p-4 rounded-lg bg-white border border-gray-390;
  @apply flex flex-col;
}
</style>
