<template>
  <div class="border-b border-gray-300 py-4">
    <button
      class="flex justify-between items-center w-full text-left font-medium text-gray-800"
      @click="open = !open"
    >
      {{ question }}
      <span class="text-red-600">{{ open ? "−" : "+" }}</span>
    </button>
    <div v-if="open" class="mt-2 text-gray-600 text-sm">
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  question: String,
  answer: String,
});

const open = ref(false);
</script>
