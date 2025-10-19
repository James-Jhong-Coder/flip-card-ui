<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { useDialogStore } from '@/stores/dialog';
import { computed } from 'vue';
import { isEmpty } from 'lodash';
const dialogStore = useDialogStore();
const visible = defineModel<boolean>('visible', { default: false });
const errorMessage = computed(() => {
  const _error = dialogStore?.failure?.data?.error || {};
  if (isEmpty(_error?.data)) {
    return _error.message || '';
  }
  return _error?.data?.message;
});
const onCloseHandler = () => {
  visible.value = false;
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
        <SvgIcon class="w-4.5 h-4.5 text-red-500" name="icon_error" />
        <span class="ml-2">錯誤提示</span>
      </div>
    </template>
    <span class="text-gray-260">{{ errorMessage }}</span>
    <template #footer>
      <div class="flex items-center">
        <CustomButton shape="square" @click="onCloseHandler">關閉</CustomButton>
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
