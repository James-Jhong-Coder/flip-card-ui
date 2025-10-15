<script setup lang="ts">
import { useProfileStore } from '@/stores/profile';
import { useDialogStore } from '@/stores/dialog';
import { useRouter } from 'vue-router';
const profileStore = useProfileStore();
const dialogStore = useDialogStore();
const router = useRouter();
const onLogout = () => {
  console.log('onLogout!!!');
  dialogStore.show('confirm', {
    message: '確認登出',
    action: () => {
      profileStore.logout();
      router.replace({
        name: 'login',
      });
    },
  });
};
</script>

<template>
  <div class="app-header">
    <div class="content">
      <h1>翻字卡學習平台</h1>
      <div class="flex items-center ml-auto text-sm">
        <span>歡迎回來，{{ profileStore.profile.name }}</span>
        <CustomButton shape="square" variant="outline" class="ml-3 text-sm" @click="onLogout">
          <SvgIcon name="icon_logout" class="w-4 h-4" />
          <span class="ml-2">登出</span>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.app-header {
  @apply w-full mx-auto;
  @apply bg-white;
  @apply px-3 shadow-sm;
}
.app-header .content {
  @apply max-w-screen-lg mx-auto leading-none;
  @apply flex items-center py-4 text-gray-360;
}
</style>
