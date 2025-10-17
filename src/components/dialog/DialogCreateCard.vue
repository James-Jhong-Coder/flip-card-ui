<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
import { useForm } from 'vee-validate';
import { computed } from 'vue';
import { object, string } from 'yup';
import { useI18n } from 'vue-i18n';
import { useDashboardStore } from '@/stores/dashboard';
import { useDialogStore } from '@/stores/dialog';
const dashboardStore = useDashboardStore();
const dialogStore = useDialogStore();
const { t } = useI18n();

const schema = object({
  language: string().required('請選擇語言'),
  front: string().trim().required('請輸入正面內容').max(100, '正面內容請在 100 字以內'),
  back: string().trim().required('請輸入背面內容').max(100, '背面內容請在 100 字以內'),
});
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    language: 'EN',
    front: '',
    back: '',
  },
});

const [language, languageAttr] = defineField('language');
const [front, frontAttrs] = defineField('front');
const [back, backAttrs] = defineField('back');

const visible = defineModel<boolean>('visible', { default: false });

const computedLanguageOption = computed(() => {
  return ['EN', 'JP'].map((item) => ({
    text: t(`cardLanguage.${item}`),
    value: item,
  }));
});

const onSubmit = handleSubmit((values) => {
  dashboardStore
    .createFlashCard({
      language: values.language,
      front: values.front,
      back: values.back,
    })
    .then(() => {
      visible.value = false;
      dialogStore.show('alert', { message: '新增成功' });
    });
});

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
          <CustomSelect
            v-model="language"
            title="語言"
            :options="computedLanguageOption"
            :error-message="errors['language']"
          />
          <GeneralInput
            v-model="front"
            title="正面內容"
            class="mt-4"
            :vee-validate-attrs="frontAttrs"
            :error-message="errors['front']"
          />
          <GeneralInput
            v-model="back"
            title="背面內容"
            class="mt-4"
            :vee-validate-attrs="backAttrs"
            :error-message="errors['back']"
          />
        </div>
        <div class="dialog-footer mt-4 justify-center">
          <CustomButton variant="outline" shape="square" @click="closeCallback">取消</CustomButton>
          <CustomButton variant="solid" shape="square" class="ml-2" @click="onSubmit"
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
