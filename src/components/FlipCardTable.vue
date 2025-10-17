<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import { useDashboardStore } from '@/stores/dashboard';
import { computed } from 'vue';
const dashboardStore = useDashboardStore();
const computedList = computed(() => {
  return dashboardStore.flashCardList?.items || [];
});
const formatDate = (timestamp: number) => {
  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
};
</script>

<template>
  <div class="flex flex-col">
    <DataTable v-if="!isEmpty(computedList)" :value="computedList" showGridlines>
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
            <CustomButton variant="outline" shape="square">
              <SvgIcon name="icon_edit" class="w-3 h-3" />
            </CustomButton>
            <CustomButton variant="outline" shape="square" class="ml-4">
              <SvgIcon name="icon_delete" class="w-3 h-3 text-red-600" />
            </CustomButton>
          </div>
        </template>
      </Column>
    </DataTable>
    <span v-else>{{ $t('flashCardEmptyHint') }}</span>
  </div>
</template>

<style>
.column-text-center {
  @apply text-center;
}
</style>
