<script setup lang="ts">
import type { Option } from '@/types/ui/select';
import PrimeVueSelect from 'primevue/select';
import { computed } from 'vue';

interface Props {
  title?: string;
  placeholder?: string;
  errorMessage?: string;
  optionLabel?: string;
  optionValue?: string;
  options?: Option[];
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
      :pt="{
        root: ['!border-gray-390', '!h-[2.5rem]'],
        option: ({ context }) => ({
          class: [context.selected ? '!bg-gray-760 !text-black' : 'bg-transparent'],
        }),
      }"
    />
  </div>
</template>

<style scoped>
.select-box {
  @apply flex flex-col;
}
</style>
