<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  totalFlashCards: number;
}

const props = defineProps<Props>();

const showSelectStudyLanguageDialog = ref<boolean>(false);

const onGotoQuiz = () => {};

const onOpenSelectStudyLanguageDialog = () => {
  showSelectStudyLanguageDialog.value = true;
};
</script>

<template>
  <div class="flex flex-col">
    <CustomButton
      variant="outline"
      shape="square"
      class="text-white"
      :disabled="props.totalFlashCards === 0"
      @click="onOpenSelectStudyLanguageDialog"
    >
      <SvgIcon name="icon_play" class="w-4 h-4" />
      <span class="ml-1">{{ $t('startLearning') }}</span>
    </CustomButton>
    <DialogSelectStudyLanguage
      v-if="showSelectStudyLanguageDialog"
      v-model:visible="showSelectStudyLanguageDialog"
      @onGotoQuiz="() => onGotoQuiz()"
    />
  </div>
</template>
