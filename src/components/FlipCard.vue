<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  front: string;
  back: string;
}

defineProps<Props>();

const isFlip = ref(false);
</script>

<template>
  <div class="flip-card" @click="isFlip = !isFlip">
    <div class="flip-card-inner" :class="{ 'is-flipped': isFlip }">
      <div class="flip-card-back">
        <div class="relative">
          <span>{{ back }}</span>
          <span class="flip-card-hint">請點擊翻面</span>
        </div>
      </div>
      <div class="flip-card-front">
        <span>{{ front }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/styles/global.css";
.flip-card {
  @apply max-w-xl;
  @apply max-h-[20rem];
  @apply w-full h-full mx-auto cursor-pointer select-none;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  @apply rounded-2xl backface-hidden text-2xl;
  @apply flex flex-col justify-center items-center;
  @apply h-full w-full;
  @apply text-slate-50;
}

.flip-card-front {
  @apply bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700;
  transform: rotateY(180deg);
}

.flip-card-back {
  @apply bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900;
}

.flip-card-hint {
  @apply absolute;
  @apply text-white/60 text-sm whitespace-nowrap;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
}
</style>
