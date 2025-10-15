<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { useDialogStore } from '@/stores/dialog';
import { computed } from 'vue';
const dialogStore = useDialogStore();
const visible = defineModel<boolean>('visible', { default: false });
const computedMessage = computed(() => {
  return dialogStore?.alert?.data?.message || '';
});
</script>

<template>
  <PrimeVueDialog
    v-model:visible="visible"
    modal
    :dismissable-mask="true"
    :closable="false"
    :style="{ width: '25rem' }"
  >
    <template #header>
      <span>系統提示</span>
    </template>
    <span>{{ computedMessage }}</span>
  </PrimeVueDialog>
</template>

<style scoped></style>
