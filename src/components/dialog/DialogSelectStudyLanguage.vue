<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const visible = defineModel<boolean>('visible', { default: false });

defineEmits<{
  'update:visible': [visible: boolean];
}>();

const selectedStudyLanguage = ref<string>('EN');
const computedLanguageOption = computed(() => {
  return ['EN', 'JP'].map((item) => ({
    text: t(`cardLanguage.${item}`),
    value: item,
  }));
});
</script>

<template>
  <PrimeVueDialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog">
        <div class="dialog-header">
          <span>選擇學習語言</span>
        </div>
        <div class="dialog-body mt-5">
          <CustomSelect v-model="selectedStudyLanguage" :options="computedLanguageOption" />
        </div>
        <div class="dialog-footer mt-4 justify-center">
          <CustomButton variant="outline" shape="square" @click="closeCallback">取消</CustomButton>
          <CustomButton variant="solid" shape="square" class="ml-2">確定</CustomButton>
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
