<template>
  <div>
    <h4 class="font-semibold mb-1">{{ label }}</h4>
    <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      <slot />
    </p>
  </div>
</template>

<script setup>
defineProps(["label"]);
</script>
