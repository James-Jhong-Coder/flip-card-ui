<script setup lang="ts">
interface Props {
  cards: FlipCard[];
}

defineProps<Props>();

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { FlipCard } from '@/types/ui/flipCard';
</script>

<template>
  <div class="flex flex-col">
    <DataTable :value="cards" showGridlines>
      <Column field="rowNo" header="序號"></Column>
      <Column field="lang" header="語言"></Column>
      <Column field="front" header="正面"></Column>
      <Column field="back" header="背面"></Column>
      <Column field="createdAt" header="建立日期"></Column>
      <Column field="updateAt" header="修改日期"></Column>
    </DataTable>
  </div>
</template>
