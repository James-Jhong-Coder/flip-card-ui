<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStudyStore } from '@/stores/study';

interface Props {
  totalFlashCards: number;
}
const router = useRouter();
const props = defineProps<Props>();
const studyStore = useStudyStore();
const showSelectStudyLanguageDialog = ref<boolean>(false);

const onGotoQuiz = (selectedLanguage: string) => {
  if (props.totalFlashCards > 0) {
    studyStore.updateState({
      selectedLanguage,
    });
    router.push({
      name: 'quiz',
    });
  }
};

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
      @onGotoQuiz="(selectedLanguage) => onGotoQuiz(selectedLanguage)"
    />
  </div>
</template>
