<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import Paginator from 'primevue/paginator';
import type { PageState } from 'primevue/paginator';
import { useDashboardStore } from '@/stores/dashboard';
import { computed, nextTick, ref } from 'vue';
import type { FlashCardItem } from '@/apis/types';
import { DEFAULT_PAGE_SIZES, DEFAULT_ROWS_PER_PAGE } from '@/const/common';
const dashboardStore = useDashboardStore();
const computedList = computed(() => {
  return dashboardStore.flashCardList?.items || [];
});
const formatDate = (timestamp: number) => {
  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
};
const showEditFlashCardDialog = ref<boolean>(false);
const editFlashCardDialogData = ref<FlashCardItem | null>(null);
const showDeleteFlashCardDialog = ref<boolean>(false);
const deleteFlashCardDialogData = ref<FlashCardItem | null>(null);

const onOpenEditDialog = (data: FlashCardItem) => {
  showEditFlashCardDialog.value = true;
  editFlashCardDialogData.value = data;
};

const onOpenDeleteDialog = (data: FlashCardItem) => {
  showDeleteFlashCardDialog.value = true;
  deleteFlashCardDialogData.value = data;
};
const onPageChange = (e: PageState) => {
  console.log('e = ', e);
  dashboardStore.updateState({
    searchParams: {
      page: e.page + 1,
      limit: e.rows,
    },
  });
  nextTick(() => {
    dashboardStore.getFlashCardList();
  });
};
</script>

<template>
  <div class="flex flex-col">
    <template v-if="!isEmpty(computedList)">
      <DataTable :value="computedList" showGridlines>
        <Column field="rowNo" header="序號"></Column>
        <Column header="語言">
          <template #body="{ data }">
            <span>{{ $t(`cardLanguage.${data.language}`) }}</span>
          </template>
        </Column>
        <Column field="front" header="正面"></Column>
        <Column field="back" header="背面"></Column>
        <Column header="建立日期">
          <template #body="{ data }">
            <span>{{ formatDate(data.createdAt) }}</span>
          </template>
        </Column>
        <Column header="修改日期">
          <template #body="{ data }">
            <span>{{ formatDate(data.updatedAt) }}</span>
          </template>
        </Column>
        <Column header="操作" header-class="column-text-center">
          <template #body="{ data }">
            <div class="flex items-center">
              <CustomButton variant="outline" shape="square" @click="onOpenEditDialog(data)">
                <SvgIcon name="icon_edit" class="w-3 h-3" />
              </CustomButton>
              <CustomButton
                variant="outline"
                shape="square"
                class="ml-4"
                @click="onOpenDeleteDialog(data)"
              >
                <SvgIcon name="icon_delete" class="w-3 h-3 text-red-600" />
              </CustomButton>
            </div>
          </template>
        </Column>
      </DataTable>
      <Paginator
        class="mt-4"
        :rows="DEFAULT_ROWS_PER_PAGE"
        :totalRecords="dashboardStore.flashCardList?.count"
        :rowsPerPageOptions="DEFAULT_PAGE_SIZES"
        :pt="{
          page: ({ context }) => ({
            class: [context.active ? '!bg-gray-760' : ''],
          }),
        }"
        @page="onPageChange"
      ></Paginator>
    </template>
    <span v-else>{{ $t('flashCardEmptyHint') }}</span>
    <DialogEditCard
      v-if="showEditFlashCardDialog"
      v-model:visible="showEditFlashCardDialog"
      :flash-card-data="editFlashCardDialogData"
    />
    <DialogDeleteCard
      v-if="showDeleteFlashCardDialog"
      v-model:visible="showDeleteFlashCardDialog"
      :flash-card-data="deleteFlashCardDialogData"
    />
  </div>
</template>

<style>
@reference "@/styles/global.css";
.column-text-center {
  @apply text-center;
}
</style>
