<template>
  <div class="border-t py-4">
    <button
      @click="open = !open"
      class="flex items-center justify-between w-full text-left font-medium"
    >
      <span>{{ question }}</span>
      <span>{{ open ? "−" : "+" }}</span>
    </button>
    <div v-if="open" class="mt-2 text-sm text-gray-600 dark:text-gray-300">
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(["question", "answer"]);
const open = ref(false);
</script>
