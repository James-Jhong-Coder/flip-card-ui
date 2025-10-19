<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="card">
    <span>{{ t('myCardsTitle') }}</span>
    <flip-card-table-filter class="mt-3" />
    <flip-card-table class="mt-4"></flip-card-table>
  </div>
</template>

<style scoped></style>
