<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import { computed, ref } from 'vue';
import type { Component } from 'vue';
const selectedTab = ref<string>('login');
const onSelectedTabHandler = (tab: string) => {
  selectedTab.value = tab;
};
const computedTabForm = computed<Record<string, Component>>(() => {
  return {
    login: LoginForm,
    register: RegisterForm,
  };
});
</script>

<template>
  <div class="page">
    <div class="section">
      <span class="text-2xl">翻字卡學習平台</span>
      <span class="text-gray-260 mt-2">學習英文和日文的最佳工具</span>
      <AuthTabs
        class="mt-5"
        :selected-tab="selectedTab"
        @on-selected-tab-handler="onSelectedTabHandler"
      />
      <component :is="computedTabForm[selectedTab]" class="mt-3" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.page {
  @apply max-w-screen-sm px-4 pb-6 mx-auto h-full;
  @apply flex justify-center items-center;
}

.section {
  @apply flex flex-col items-center;
  @apply rounded-xl bg-white w-full;
  @apply p-6 border border-gray-200 shadow-lg;
}
</style>
