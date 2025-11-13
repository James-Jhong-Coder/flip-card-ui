<script setup lang="ts">
import { useForm } from 'vee-validate';
import { useDashboardStore } from '@/stores/dashboard';
import { useI18n } from 'vue-i18n';
import { object, string } from 'yup';
import { computed, nextTick, watch } from 'vue';
import type { LanguageOption } from '@/types/ui/flipCard';
const { t } = useI18n();
const dashboardStore = useDashboardStore();

const schema = object({
  language: string().nullable(),
  front: string().nullable(),
  back: string().nullable(),
});

const { defineField, resetForm, values } = useForm({
  validationSchema: schema,
  initialValues: {
    language: dashboardStore.searchParams.language ?? 'all',
    front: dashboardStore.searchParams.front,
    back: dashboardStore.searchParams.back,
  },
});

const computedLanguageOption = computed<LanguageOption[]>(() => {
  const defaultOption: LanguageOption[] = [{ text: t('all'), value: 'all' }];
  const options: LanguageOption[] = ['EN', 'JP'].map((item) => ({
    text: t(`cardLanguage.${item}`),
    value: item,
  }));
  return defaultOption.concat(options);
});

const onSearch = () => {
  dashboardStore.getFlashCardList();
};
const onClear = () => {
  resetForm();
  nextTick(() => {
    onSearch();
  });
};

const [language] = defineField('language');
const [front] = defineField('front');
const [back] = defineField('back');

onSearch();

watch(
  values,
  (newVal) => {
    dashboardStore.updateState({
      searchParams: {
        ...dashboardStore.searchParams,
        ...newVal,
      },
    });
  },
  { deep: true },
);
</script>

<template>
  <div class="flex flex-col">
    <BaseCard>
      <div class="flex items-center">
        <SvgIcon name="icon_search" class="w-3 h-3" />
        <span class="ml-2">{{ $t('searchFilter') }}</span>
      </div>
      <div class="table-filter mt-3">
        <FilterSelect v-model="language" title="語言" :options="computedLanguageOption" />
        <FilterGeneralInput v-model="front" title="正面" />
        <FilterGeneralInput v-model="back" title="背面" />
      </div>
      <div class="flex items-center justify-end mt-4">
        <CustomButton shape="square" @click="onClear">清除</CustomButton>
        <CustomButton variant="solid" shape="square" class="ml-2" @click="onSearch"
          >搜尋</CustomButton
        >
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.table-filter {
  @apply grid;
  /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  /* gap: 0 1rem; */
  gap: 1rem 0;
}

@media screen and (min-width: 40rem) {
  .table-filter {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 1rem;
  }
}

</style>
