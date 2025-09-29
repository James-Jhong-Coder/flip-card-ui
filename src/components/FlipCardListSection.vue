<script setup lang="ts">
import type { TabItem } from '@/types/ui/tabs';
import { ref } from 'vue';

const selectedTab = ref(null);
const category: TabItem[] = [
  {
    text: '全部',
    value: null,
    count: 0,
  },
  {
    text: '英文',
    value: 0,
    count: 0,
  },
  {
    text: '日文',
    value: 0,
    count: 0,
  },
];
</script>

<template>
  <div class="card">
    <span>我的字卡</span>
    <flip-card-category :selected-tab="selectedTab" :tab-list="category" class="mt-3" />
    <flip-card-table class="mt-4"></flip-card-table>
  </div>
</template>

<style scoped></style>
