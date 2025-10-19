<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { useDashboardStore } from '@/stores/dashboard';
import { useDialogStore } from '@/stores/dialog';
import type { FlashCardItem } from '@/apis/types';
import { isEmpty } from 'lodash';

interface Props {
  flashCardData: FlashCardItem | null;
}

const props = defineProps<Props>();

const dashboardStore = useDashboardStore();
const dialogStore = useDialogStore();

const visible = defineModel<boolean>('visible', { default: false });

// const onSubmit = handleSubmit((values) => {
//   dashboardStore
//     .updateFlashCard({
//       cardId: props.flashCardData?.id,
//       language: values.language,
//       front: values.front,
//       back: values.back,
//     })
//     .then(() => {
//       visible.value = false;
//       dialogStore.show('alert', { message: '新增成功' });
//     });
// });

const onDeleteFlashCard = () => {
  dashboardStore
    .deleteFlashCard({
      cardId: props.flashCardData?.id,
    })
    .then(() => {
      visible.value = false;
      dialogStore.show('alert', { message: '刪除成功' });
    });
};

defineEmits<{
  'update:visible': [visible: boolean];
}>();
</script>

<template>
  <PrimeVueDialog v-model:visible="visible" header="編輯卡片" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog">
        <div class="dialog-header">
          <span>刪除字卡</span>
          <SvgIcon name="icon_close_dialog" class="w-3 h-3 icon-close" @click="closeCallback" />
        </div>
        <div class="dialog-body mt-5">
          <span>是否確定刪除該張字卡</span>
          <template v-if="!isEmpty(flashCardData)">
            <span>正面 : {{ flashCardData.front }}</span>
            <span>背面 : {{ flashCardData.back }}</span>
          </template>
        </div>
        <div class="dialog-footer mt-4 justify-center">
          <CustomButton variant="outline" shape="square" @click="closeCallback">取消</CustomButton>
          <CustomButton variant="solid" shape="square" class="ml-2" @click="onDeleteFlashCard"
            >確定</CustomButton
          >
        </div>
      </div>
    </template>
  </PrimeVueDialog>
</template>

<style scoped>
@reference "@/styles/global.css";

.dialog {
  @apply p-4;
}

.dialog-header {
  @apply flex items-center justify-center;
  @apply relative;
  @apply py-3;
}

.dialog-header .icon-close {
  @apply absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.dialog-body {
  @apply flex flex-col;
}

.dialog-footer {
  @apply flex items-center;
}
</style>
