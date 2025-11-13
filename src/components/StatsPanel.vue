<script setup lang="ts">
interface Stats {
  total?: number;
  en?: number;
  jp?: number;
}

interface Props {
  stats: Stats;
}

defineProps<Props>();
</script>

<template>
  <div class="stats-panel">
    <StatCard title="總字卡數" :total="stats.total" />
    <StatCard title="英文字卡" english-title="en" :total="stats.en" />
    <StatCard title="日文字卡" english-title="jp" :total="stats.jp" />
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.stats-panel {
  @apply grid;
  grid-template-columns: 1fr;
  gap: 1rem 0;
}
@media screen and (min-width: 40rem) {
  .stats-panel {
    grid-template-columns: repeat(3, 1fr);
    gap: 0 0.75rem;
  }
}
</style>
