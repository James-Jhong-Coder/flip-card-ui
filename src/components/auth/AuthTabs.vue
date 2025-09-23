<script setup lang="ts">
interface Props {
  selectedTab: string;
}

defineProps<Props>();

const emits = defineEmits<{
  onSelectedTabHandler: [tab: string];
}>();

const onSelectedTabHandler = (tab: string) => {
  emits('onSelectedTabHandler', tab);
};
</script>

<template>
  <div class="auth-tabs">
    <custom-button
      variant="ghost"
      class="justify-center font-medium"
      :is-active="selectedTab === 'login'"
      @click="onSelectedTabHandler('login')"
      >登入</custom-button
    >
    <custom-button
      variant="ghost"
      class="justify-center font-medium"
      :is-active="selectedTab === 'register'"
      @click="onSelectedTabHandler('register')"
      >註冊</custom-button
    >
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";

.auth-tabs {
  @apply grid;
  @apply bg-gray-300 rounded-4xl w-full py-2 px-2;
  grid-template-columns: repeat(2, 1fr);
}
</style>
