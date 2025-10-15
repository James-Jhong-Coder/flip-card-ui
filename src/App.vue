<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useApiStore } from '@/stores/api';
import { useDialogStore } from './stores/dialog';
const route = useRoute();
const dialogStore = useDialogStore();
const apiStore = useApiStore();

watch(
  () => apiStore.apiRequestingCount,
  (val) => {
    if (val > 0) {
      dialogStore.show('loading');
    } else {
      dialogStore.hide('loading');
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition :name="(route.meta.transition as string) || ''" mode="out-in" appear>
      <component :is="Component" />
    </Transition>
  </RouterView>
  <GlobalDialogGroup />
</template>

<style scoped>
.quiz-fade-enter-active,
.quiz-fade-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.quiz-fade-enter-from,
.quiz-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
