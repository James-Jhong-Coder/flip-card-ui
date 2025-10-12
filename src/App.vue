<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
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
