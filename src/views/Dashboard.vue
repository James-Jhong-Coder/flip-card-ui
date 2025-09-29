<template>
  <section class="dashboard">
    <div class="content mt-5">
      <div class="summary">
        <StatCard title="總字卡數" />
        <StatCard title="英文字卡" english-title="en" />
        <StatCard title="日文字卡" english-title="jp" />
      </div>
      <div class="flex items-center mt-6">
        <CustomButton variant="solid" shape="square">
          <SvgIcon name="icon_plus" class="w-4 h-4" />
          <span class="ml-1">新增字卡</span>
        </CustomButton>
        <CustomButton variant="outline" shape="square" class="ml-3 text-white">
          <SvgIcon name="icon_play" class="w-4 h-4" />
          <span class="ml-1">開始學習</span>
        </CustomButton>
      </div>
      <FlipCardListSection class="mt-5" />
    </div>
  </section>
</template>

<style scoped>
@reference "@/styles/global.css";

.dashboard {
  @apply w-full;
  @apply px-3 h-full;
}

.dashboard .content {
  @apply max-w-screen-lg mx-auto;
}

.dashboard .summary {
  @apply grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 12px;
}
</style>
