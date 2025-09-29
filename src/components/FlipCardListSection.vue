<script setup lang="ts">
import type { FlipCard } from '@/types/ui/flipCard';
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

const cards: FlipCard[] = [
  {
    rowNo: 1,
    lang: 'EN',
    createdAt: '2025-09-30',
    updateAt: '2025-09-30',
    front: 'apple',
    back: '蘋果',
  },
  {
    rowNo: 2,
    lang: 'EN',
    createdAt: '2025-09-28',
    updateAt: '2025-09-29',
    front: 'book',
    back: '書本',
  },
  {
    rowNo: 3,
    lang: 'JP',
    createdAt: '2025-09-27',
    updateAt: '2025-09-27',
    front: 'こんにちは',
    back: '你好',
  },
];
</script>

<template>
  <div class="card">
    <span>我的字卡</span>
    <flip-card-category :selected-tab="selectedTab" :tab-list="category" class="mt-3" />
    <flip-card-table class="mt-4" :cards="cards"></flip-card-table>
  </div>
</template>

<style scoped></style>
