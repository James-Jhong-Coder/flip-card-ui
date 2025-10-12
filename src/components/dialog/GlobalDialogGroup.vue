<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog';
import { computed } from 'vue';
const dialogStore = useDialogStore();

const computedLoading = computed({
  get: () => dialogStore.loading?.visible ?? false,
  set: () => {
    dialogStore.hide('loading');
  },
});
</script>

<template>
  <div class="flex flex-col">
    <GlobalDialogLoading v-model:visible="computedLoading" />
  </div>
</template>
