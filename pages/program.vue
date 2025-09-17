<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- Header -->
    <header
      class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">
          Festival Programma
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
          Zoek, filter of selecteer een dag — klik op een act voor details.
        </p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <!-- dagen -->
        <nav class="flex rounded-full bg-gray-100 dark:bg-neutral-800 p-1">
          <button
            v-for="d in days"
            :key="d"
            @click="selectedDay = d"
            :class="[
              'px-4 py-1 rounded-full text-sm transition',
              selectedDay === d
                ? 'bg-white dark:bg-neutral-700 shadow text-indigo-600'
                : 'text-gray-600 dark:text-gray-300',
            ]"
          >
            {{ dayLabel(d) }}
          </button>
        </nav>

        <!-- zoeken -->
        <input
          v-model="query"
          type="search"
          placeholder="Zoek artiest of podium"
          class="w-full sm:w-64 px-3 py-2 rounded-lg border bg-white dark:bg-neutral-900 text-sm"
        />

        <!-- filter -->
        <select
          v-model="selectedStage"
          class="text-sm rounded-lg border bg-white dark:bg-neutral-900 px-3 py-2"
        >
          <option value="">Alle podia</option>
          <option v-for="s in stages" :key="s">{{ s }}</option>
        </select>

        <!-- layout veranderen -->
        <button
          @click="layout = layout === 'grid' ? 'list' : 'grid'"
          class="px-3 py-1 rounded-lg border text-sm"
        >
          {{ layout === "grid" ? "List" : "Grid" }}
        </button>
      </div>
    </header>

    <!-- Content -->
    <main>
      <div
        v-if="layout === 'grid'"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <article
          v-for="event in filtered"
          :key="eventKey(event)"
          class="bg-white dark:bg-neutral-900 rounded-xl border p-4 shadow hover:shadow-lg transition"
        >
          <header class="flex justify-between items-start">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">
                {{ event.title }}
              </h3>
              <p class="text-sm text-gray-500">
                {{ event.stage }} • {{ formatTimeRange(event) }}
              </p>
            </div>
            <button @click="toggleFavorite(event)" class="p-1">
              <span v-if="isFavorite(event)" class="text-yellow-500">★</span>
              <span v-else class="text-gray-400">☆</span>
            </button>
          </header>

          <button
            @click="modalEvent = event"
            class="mt-3 text-indigo-600 text-sm"
          >
            Details
          </button>
        </article>
      </div>

      <ul v-else class="space-y-4">
        <li
          v-for="event in filtered"
          :key="eventKey(event)"
          class="bg-white dark:bg-neutral-900 rounded-xl border p-4 shadow"
        >
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-semibold">{{ event.title }}</h3>
              <p class="text-xs text-gray-500">
                {{ event.stage }} • {{ formatTimeRange(event) }}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button @click="toggleFavorite(event)">
                <span v-if="isFavorite(event)" class="text-yellow-500">★</span>
                <span v-else class="text-gray-400">☆</span>
              </button>
              <button
                @click="modalEvent = event"
                class="px-2 py-1 bg-indigo-600 text-white rounded-md text-xs"
              >
                Details
              </button>
            </div>
          </div>
        </li>
      </ul>
    </main>

    <!-- Modal -->
    <div
      v-if="modalEvent"
      class="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        class="bg-white dark:bg-neutral-900 rounded-xl max-w-md w-full p-6 shadow-xl"
      >
        <header class="flex justify-between items-start">
          <div>
            <h2 class="text-lg font-bold">{{ modalEvent.title }}</h2>
            <p class="text-sm text-gray-500">
              {{ modalEvent.stage }} • {{ formatTimeRange(modalEvent) }}
            </p>
          </div>
          <button
            @click="modalEvent = null"
            class="px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded"
          >
            X
          </button>
        </header>

        <p class="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Geen beschrijving beschikbaar.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const days = ["saturday", "sunday"];
const stages = ["Poton", "The Lake", "The Club", "Hanggar"];

const schedule = {
  saturday: [
    { title: "Armin van Buuren", start: "10:30", end: "12:15", stage: "Poton" },
    { title: "Kensington", start: "12:30", end: "13:45", stage: "Poton" },
    { title: "Comedy", start: "12:15", end: "12:45", stage: "The Club" },
  ],
  sunday: [
    { title: "Martin Garrix", start: "10:30", end: "12:15", stage: "Poton" },
  ],
};

const selectedDay = ref("saturday");
const query = ref("");
const selectedStage = ref("");
const layout = ref("grid");
const modalEvent = ref(null);
const favorites = ref(new Set());

const eventKey = (e) => `${e.title}-${e.start}`;
const formatTimeRange = (e) => `${e.start} - ${e.end}`;
const dayLabel = (d) => (d === "saturday" ? "Zaterdag" : "Zondag");

const eventsForDay = computed(() => schedule[selectedDay.value] || []);

const filtered = computed(() => {
  return eventsForDay.value.filter((e) => {
    if (selectedStage.value && e.stage !== selectedStage.value) return false;
    if (
      query.value &&
      !e.title.toLowerCase().includes(query.value.toLowerCase())
    )
      return false;
    return true;
  });
});

const isFavorite = (e) => favorites.value.has(eventKey(e));
const toggleFavorite = (e) => {
  const k = eventKey(e);
  if (favorites.value.has(k)) favorites.value.delete(k);
  else favorites.value.add(k);
};
</script>
