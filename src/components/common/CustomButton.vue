<script setup lang="ts">
type Variant = 'solid' | 'outline' | 'ghost';
type Shape = 'square' | 'pill';

interface Props {
  variant?: Variant;
  disabled?: boolean;
  shape?: Shape;
  isActive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'outline',
  disabled: false,
  shape: 'pill',
});

const emits = defineEmits<{
  click: [];
}>();

const onClickHandler = () => {
  if (!props.disabled) {
    emits('click');
  }
};
</script>

<template>
  <div class="btn" :class="[variant, shape, { disabled, active: isActive }]" @click="onClickHandler">
    <slot></slot>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";

.btn {
  @apply flex items-center justify-center;
  @apply leading-none;
  @apply h-[2rem] px-3;
  @apply cursor-pointer select-none outline-none text-sm;
}

.btn:focus {
  @apply outline-none;
}

.btn.pill {
  @apply rounded-full;
}

.btn.square {
  @apply rounded-md;
}

.btn.disabled {
  opacity: 0.5;
  @apply cursor-not-allowed;
}

.btn.solid {
  @apply bg-gray-650;
  @apply text-white;
}

.btn.solid:hover {
  @apply bg-gray-630;
}

.btn.outline {
  @apply border border-gray-390 text-gray-750;
}

.btn.outline:hover {
  @apply border-gray-390 bg-gray-470;
}

.btn.outline.disabled:hover {
  background: unset;
}

.btn.ghost {
  @apply bg-transparent text-gray-700;
}

.btn.ghost:hover {
  @apply bg-none;
}

.btn.ghost.disabled:hover {
  @apply bg-none;
}

.btn.ghost.active {
  @apply bg-white;
}
</style>
