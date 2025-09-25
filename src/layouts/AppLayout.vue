<script setup lang="ts"></script>

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
