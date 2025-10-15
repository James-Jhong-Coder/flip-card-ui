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

const computedFailure = computed({
  get: () => dialogStore.failure?.visible ?? false,
  set: () => {
    dialogStore.hide('failure');
  },
});
const computedConfirm = computed({
  get: () => dialogStore.confirm?.visible ?? false,
  set: () => {
    dialogStore.hide('confirm');
  },
});

const computedAlert = computed({
  get: () => dialogStore.alert?.visible ?? false,
  set: () => {
    dialogStore.hide('alert');
  },
});
</script>

<template>
  <div class="flex flex-col">
    <GlobalDialogLoading v-model:visible="computedLoading" />
    <GlobalDialogFailure v-model:visible="computedFailure" />
    <GlobalDialogConfirm v-model:visible="computedConfirm" />
    <GlobalDialogAlert v-model:visible="computedAlert" />
  </div>
</template>
