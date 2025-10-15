<script setup lang="ts">
import { useProfileStore } from '@/stores/profile';
import { GET_USERS_PROFILE } from '@/apis/api';
const profileStore = useProfileStore();
GET_USERS_PROFILE().then((res) => {
  profileStore.updateState({ profile: res.data });
});
</script>

<template>
  <div class="app-layout">
    <app-header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  @apply flex flex-col;
  @apply h-full;
}
.content {
  @apply flex-1;
}
</style>
