<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { computed, ref } from 'vue';

const visible = defineModel<boolean>('visible', { default: false });

const computedLanguageOption = computed(() => {
  return ['英文', '日文'].map((item, index) => ({
    text: item,
    value: index,
  }));
});

const selectedLanguage = ref(null);

defineEmits<{
  'update:visible': [visible: boolean];
}>();
</script>

<template>
  <PrimeVueDialog v-model:visible="visible" header="新增卡片" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog">
        <div class="dialog-header">
          <span>新增字卡</span>
          <SvgIcon name="icon_close_dialog" class="w-3 h-3 icon-close" @click="closeCallback" />
        </div>
        <div class="dialog-body mt-5">
          <CustomSelect v-model="selectedLanguage" title="語言" :options="computedLanguageOption" />
          <GeneralInput title="正面內容" class="mt-4" />
          <GeneralInput title="背面內容" class="mt-4" />
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
