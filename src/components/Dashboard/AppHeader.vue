<template>
  <div class="app-header">
    <div class="content">
      <h1>翻字卡學習平台</h1>
      <div class="flex items-center ml-auto text-sm">
        <span>歡迎回來，James</span>
        <CustomButton shape="square" variant="outline" class="ml-3 text-sm">
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
