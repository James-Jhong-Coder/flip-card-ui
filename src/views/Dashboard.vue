<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';
import DialogCreateCard from '@/components/dialog/DialogCreateCard.vue';

const dashboardStore = useDashboardStore();
const showCreateCardDialog = ref(false);
const onOpenCreateCardDialogHandler = () => {
  showCreateCardDialog.value = true;
};
const router = useRouter();
const computedTotalFlashCards = computed(() => {
  return Number(dashboardStore.stats.total || 0);
});
const onGotoQuiz = () => {
  if (computedTotalFlashCards.value > 0) {
    router.push({
      name: 'quiz',
    });
  }
};
</script>

<template>
  <section class="dashboard">
    <div class="content mt-5">
      <StatsPanel :stats="dashboardStore.stats" />
      <div class="flex items-center mt-6">
        <CustomButton variant="solid" shape="square" @click="onOpenCreateCardDialogHandler">
          <SvgIcon name="icon_plus" class="w-4 h-4" />
          <span class="ml-1">新增字卡</span>
        </CustomButton>
        <CustomButton
          variant="outline"
          shape="square"
          class="ml-3 text-white"
          :disabled="computedTotalFlashCards === 0"
          @click="onGotoQuiz"
        >
          <SvgIcon name="icon_play" class="w-4 h-4" />
          <span class="ml-1">開始學習</span>
        </CustomButton>
      </div>
      <FlipCardListSection class="mt-5" />
    </div>
    <DialogCreateCard v-if="showCreateCardDialog" v-model:visible="showCreateCardDialog" />
  </section>
</template>

<style scoped>
@reference "@/styles/global.css";

.dashboard {
  @apply w-full;
  @apply px-3 h-full;
}

.dashboard .content {
  @apply max-w-screen-lg mx-auto;
}

.dashboard .summary {
  @apply grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 12px;
}
</style>
