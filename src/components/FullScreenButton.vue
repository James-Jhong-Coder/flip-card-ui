<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <div class="flex items-center">
    <CustomButton @click="toggle" variant="outline" shape="square">
      <span v-if="!isFullscreen">全螢幕</span>
      <span v-else>退出全螢幕</span>
    </CustomButton>
  </div>
</template>
