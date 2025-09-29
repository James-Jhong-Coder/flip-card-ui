<script setup lang="ts">
import PrimeVueSelect from 'primevue/select';
import { computed } from 'vue';

interface option {
  text: string;
  value: number | string;
}

interface Props {
  title?: string;
  placeholder?: string;
  errorMessage?: string;
  optionLabel?: string;
  optionValue?: string;
  options?: option[];
}

const props = withDefaults(defineProps<Props>(), {
  optionLabel: 'text',
  optionValue: 'value',
});

const modelValue = defineModel<string | number | null>({ default: null });

const hasTitle = computed(() => {
  return !!props.title;
});
</script>

<template>
  <div class="select-box">
    <span v-if="hasTitle" class="mb-2">{{ title }}</span>
    <PrimeVueSelect
      v-model="modelValue"
      :options="options"
      :option-label="optionLabel"
      :option-value="optionValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
.select-box {
  @apply flex flex-col;
}
</style>
