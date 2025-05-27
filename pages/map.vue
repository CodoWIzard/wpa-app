<template>
  <div class="relative max-w-4xl mx-auto p-4">
    <!-- Map container -->
    <svg
      viewBox="0 0 800 600"
      class="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Region 1 -->
      <path
        d="M100,100 L200,100 L200,200 L100,200 Z"
        class="cursor-pointer transition duration-200"
        :class="hovered === 'area1' ? 'fill-red-500' : 'fill-red-300'"
        @mouseenter="hovered = 'area1'"
        @mouseleave="hovered = null"
        @click="selectArea('area1')"
      />

      <!-- Region 2 -->
      <path
        d="M300,100 L400,100 L400,200 L300,200 Z"
        class="cursor-pointer transition duration-200"
        :class="hovered === 'area2' ? 'fill-blue-500' : 'fill-blue-300'"
        @mouseenter="hovered = 'area2'"
        @mouseleave="hovered = null"
        @click="selectArea('area2')"
      />
    </svg>

    <!-- Tooltip or Info Box -->
    <div v-if="selectedArea" class="mt-6 p-4 bg-gray-100 rounded shadow">
      <h3 class="text-lg font-bold mb-2">Gebied: {{ selectedArea }}</h3>
      <p>
        {{ areaDescriptions[selectedArea] || "Geen informatie beschikbaar." }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hovered = ref(null);
const selectedArea = ref(null);

function selectArea(area) {
  selectedArea.value = area;
}

const areaDescriptions = {
  area1: "Main stage zone with live performances.",
  area2: "Workshop & activity tents.",
};
</script>
