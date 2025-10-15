<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { useDialogStore } from '@/stores/dialog';
import { computed } from 'vue';
const dialogStore = useDialogStore();
const visible = defineModel<boolean>('visible', { default: false });
const onCloseHandler = () => {
  visible.value = false;
};
const confirmMessage = computed(() => {
  return dialogStore?.confirm?.data?.message || '';
});

const onConfirm = () => {
  if (typeof dialogStore?.confirm?.data.action === 'function') {
    dialogStore?.confirm?.data.action();
  }
};
</script>

<template>
  <PrimeVueDialog
    v-model:visible="visible"
    :draggable="false"
    modal
    :style="{ width: '25rem' }"
    :dismissable-mask="true"
    :closable="false"
  >
    <template #header>
      <div class="flex items-center text-lg font-semibold">
        <span class="ml-2">系統提示</span>
      </div>
    </template>
    <span>{{ confirmMessage }}</span>
    <template #footer>
      <div class="flex items-center">
        <CustomButton variant="solid" shape="square" @click="onConfirm">確定</CustomButton>
        <CustomButton shape="square" @click="onCloseHandler" class="ml-3">關閉</CustomButton>
      </div>
    </template>
  </PrimeVueDialog>
</template>

<style scoped>
@reference "@/styles/global.css";

.dialog-failure {
  @apply flex flex-col;
}
</style>
