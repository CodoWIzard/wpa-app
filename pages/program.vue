<template>
  <div class="max-w-screen-md mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6">Festival Tijdlijn</h2>

    <!-- Day Selector Buttons -->
    <div class="flex space-x-4 mb-6">
      <button
        class="px-4 py-2 rounded font-semibold"
        :class="
          currentDay === 'saturday'
            ? 'bg-red-600 text-white'
            : 'bg-gray-200 text-gray-800'
        "
        @click="currentDay = 'saturday'"
      >
        Zaterdag
      </button>
      <button
        class="px-4 py-2 rounded font-semibold"
        :class="
          currentDay === 'sunday'
            ? 'bg-red-600 text-white'
            : 'bg-gray-200 text-gray-800'
        "
        @click="currentDay = 'sunday'"
      >
        Zondag
      </button>
    </div>

    <!-- Timeline -->
    <div class="relative border-l-4 border-gray-300">
      <div
        v-for="(event, index) in schedule[currentDay]"
        :key="index"
        class="mb-10 ml-6"
      >
        <span
          class="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-white"
          :class="event.color"
        ></span>
        <div :class="['p-4 rounded-lg shadow-md', event.color]">
          <h3 class="text-lg font-semibold text-white">{{ event.title }}</h3>
          <p class="text-sm text-white/80 mb-2">{{ event.time }}</p>
          <p class="text-sm text-white">{{ event.description }}</p>
          <span
            class="inline-block mt-2 text-xs uppercase bg-white/30 text-white px-2 py-1 rounded"
          >
            {{ event.category }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentDay = ref("saturday");

const schedule = {
  saturday: [
    {
      title: "Opening Ceremony",
      time: "09:00 - 09:30",
      description: "Welkomswoord en introductie van het festival",
      category: "Ceremonie",
      color: "bg-red-500",
    },
    {
      title: "Live DJ Set",
      time: "10:00 - 11:30",
      description: "Dans mee op beats van onze huis-DJ",
      category: "Muziek",
      color: "bg-pink-500",
    },
    {
      title: "Yoga Workshop",
      time: "13:00 - 14:00",
      description: "Rustige yogasessie voor alle niveaus",
      category: "Workshop",
      color: "bg-blue-500",
    },
  ],
  sunday: [
    {
      title: "Climate Talk",
      time: "10:00 - 11:00",
      description: "Sprekers over duurzaamheid en de toekomst",
      category: "Talks",
      color: "bg-green-600",
    },
    {
      title: "Street Food Market",
      time: "12:00 - 14:00",
      description: "Ontdek lokale foodtrucks en snacks",
      category: "Eten",
      color: "bg-yellow-500",
    },
    {
      title: "Closing Concert",
      time: "17:00 - 19:00",
      description: "Avondoptreden om het festival af te sluiten",
      category: "Muziek",
      color: "bg-purple-600",
    },
  ],
};
</script>
