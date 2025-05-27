<template>
  <div
    class="bg-white/90 dark:bg-zinc-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-zinc-700"
  >
    <div class="flex items-center gap-2 mb-4">
      <span class="text-2xl">{{ icon }}</span>
      <h2 class="text-xl font-semibold">{{ title }}</h2>
    </div>
    <div><slot /></div>
  </div>
</template>

<script setup>
defineProps(["title", "icon"]);
</script>
