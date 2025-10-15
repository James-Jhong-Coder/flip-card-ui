<script setup lang="ts">
import PrimeVueDialog from 'primevue/dialog';
const visible = defineModel<boolean>('visible', { default: false });
</script>

<template>
  <PrimeVueDialog
    v-model:visible="visible"
    modal
    :pt="{
      root: {
        class: '!bg-transparent !border-none !shadow-none',
      },
    }"
  >
    <template #container>
      <div class="loading-spinner"></div>
    </template>
  </PrimeVueDialog>
</template>

<style scoped>
@reference "@/styles/global.css";
.loading-spinner {
  width: 48px;
  height: 48px;
  @apply bg-transparent;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
