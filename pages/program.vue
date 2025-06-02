<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6">Festival Programma</h2>

    <div v-for="day in days" :key="day" class="mb-10">
      <h3 class="text-2xl font-semibold mb-4">
        {{ day === "saturday" ? "Zaterdag" : "Zondag" }}
      </h3>

      <div v-for="stage in stages" :key="stage" class="mb-6">
        <h4 class="text-lg font-bold mb-2 text-gray-700">{{ stage }}</h4>
        <div
          class="overflow-x-auto flex space-x-4 pb-2 scrollbar-thin scrollbar-thumb-gray-400"
        >
          <div
            v-for="event in filteredEvents(day, stage)"
            :key="event.title + event.start"
            class="min-w-[160px] bg-gradient-to-br from-indigo-600 to-purple-500 text-white rounded-xl p-4 shadow-md transform hover:scale-105 transition duration-300"
          >
            <div class="font-bold text-sm mb-1">{{ event.title }}</div>
            <div class="text-xs">{{ event.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const days = ["saturday", "sunday"];
const stages = ["Poton", "The Lake", "The Club", "Hanggar"];

const schedule = {
  saturday: [
    {
      title: "Armin van Buuren",
      stage: "Poton",
      time: "10:30 - 12:15",
    },
    {
      title: "Talent Set 1",
      start: "10:00",
      end: "19:45",
      stage: "The Lake",
      time: "10:00 - 10:45",
    },
    {
      title: "DJ Set 1",
      start: "10:00",
      end: "12:00",
      stage: "Hanggar",
      time: "10:00 - 11:00",
    },
    {
      title: "Martin Garrix",
      start: "11:00",
      end: "12:15",
      stage: "The Lake",
      time: "06:00 skib- 07:15",
    },
    // Add more Saturday events
  ],
  sunday: [
    {
      title: "Martin Garrix",
      start: "10:30",
      end: "12:15",
      stage: "Poton",
      time: "10:30 - 12:15",
    },
    {
      title: "Talent Set 2",
      start: "10:00",
      end: "10:45",
      stage: "The Lake",
      time: "10:00 - 10:45",
    },
    {
      title: "DJ Set 2",
      start: "10:00",
      end: "11:00",
      stage: "Hanggar",
      time: "10:00 - 11:00",
    },
    // Add more Sunday events
  ],
};

const filteredEvents = (day, stage) => {
  return schedule[day].filter((e) => e.stage === stage);
};
</script>

<style>
/* Optional: Tailwind's scrollbar utility requires this */
.scrollbar-thin {
  scrollbar-width: thin;
}
</style>
