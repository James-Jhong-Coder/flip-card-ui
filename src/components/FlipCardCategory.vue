<script setup lang="ts">
import type { TabItem } from '@/types/ui/tabs';

interface Props {
  tabList: TabItem[];
  selectedTab: string | null;
}

defineProps<Props>();
</script>

<template>
  <div class="inline-flex items-center">
    <Tabs :tabs="tabList" :selected-tab="selectedTab"></Tabs>
  </div>
</template>

<style scoped>

</style>
