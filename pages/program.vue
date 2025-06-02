<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6">Festival Programma</h2>

    <!-- Time Block Grid -->
    <div class="overflow-x-auto relative">
      <div
        class="grid border border-gray-300 relative"
        :style="{ gridTemplateColumns: 'repeat(57, minmax(30px, 1fr))' }"
      >
        <!-- Top-left empty cell -->
        <div
          class="bg-white border-r border-gray-300 sticky left-0 z-10 row-span-1"
        ></div>
        <!-- Time labels -->
        <div
          v-for="(slot, i) in timeSlots"
          :key="'time-' + i"
          class="text-xs text-center py-2 border-r border-b border-gray-200 bg-gray-100"
        >
          {{ slot }}
        </div>

        <!-- Both Days -->
        <template v-for="(day, dayIndex) in ['saturday', 'sunday']">
          <template v-for="(stage, stageIndex) in stages">
            <!-- Sticky Stage Label -->
            <div
              class="bg-gray-100 font-semibold text-sm text-right pr-2 border-r border-b border-gray-300 sticky left-0 z-10 flex items-center justify-between"
            >
              <span>{{ stage }}</span>
              <!-- Only show day label once per group of 4 stages -->
              <span
                v-if="stageIndex === 0"
                class="ml-2 text-xs font-bold text-gray-500"
              >
                {{ day === "saturday" ? "Zaterdag" : "Zondag" }}
              </span>
            </div>

            <!-- Time slots grid -->
            <div
              v-for="i in 56"
              :key="'cell-' + day + '-' + stageIndex + '-' + i"
              class="border-r border-b border-gray-100 h-10"
            ></div>

            <!-- Events -->
            <template
              v-for="(event, index) in schedule[day].filter(
                (e) => e.stage === stage
              )"
            >
              <div
                class="absolute text-xs text-white p-1 rounded shadow-sm"
                :class="event.color"
                :style="getBlockStyle(event, dayIndex, stage)"
              >
                <strong>{{ event.title }}</strong
                ><br />
                <span>{{ event.time }}</span>
              </div>
            </template>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stages = ["Poton", "The Lake", "The Club", "Hanggar"];

const timeSlots = [];
for (let h = 10; h <= 23; h++) {
  for (let m of ["00", "15", "30", "45"]) {
    timeSlots.push(`${String(h).padStart(2, "0")}:${m}`);
  }
}

const getTimeIndex = (time) => {
  const [h, m] = time.split(":").map(Number);
  return (h - 10) * 4 + Math.floor(m / 15);
};

// Returns style adjusted for vertical offset based on day and stage
const getBlockStyle = (event, dayIndex, stage) => {
  const start = getTimeIndex(event.start);
  const end = getTimeIndex(event.end);
  const span = end - start;
  const rowHeight = 40; // Each row is 40px high

  // Compute top position: (dayIndex * stages.length + stageIndex) * rowHeight
  const top =
    (dayIndex * stages.length + stages.indexOf(stage)) * rowHeight + 40;

  return {
    gridColumnStart: start + 2,
    gridColumnEnd: start + 2 + span,
    top: `${top}px`,
    left: `${(start + 1) * 30}px`,
    width: `${span * 30}px`,
    height: `${rowHeight - 2}px`,
    position: "absolute",
  };
};

const schedule = {
  saturday: [
    {
      title: "Armin van Buuren",
      start: "10:30",
      end: "12:15",
      stage: "Poton",
      color: "bg-red-500",
      time: "10:30 - 12:15",
    },
    {
      title: "Talent set 1",
      start: "10:00",
      end: "10:45",
      stage: "The Lake",
      color: "bg-blue-500",
      time: "10:00 - 10:45",
    },
    {
      title: "DJ set 1",
      start: "10:00",
      end: "11:00",
      stage: "Hanggar",
      color: "bg-green-500",
      time: "10:00 - 11:00",
    },
    // Add more Saturday events as needed
  ],
  sunday: [
    {
      title: "Martin Garrix",
      start: "10:30",
      end: "12:15",
      stage: "Poton",
      color: "bg-purple-600",
      time: "10:30 - 12:15",
    },
    {
      title: "Talent set 1",
      start: "10:00",
      end: "10:45",
      stage: "The Lake",
      color: "bg-blue-500",
      time: "10:00 - 10:45",
    },
    {
      title: "DJ set 1",
      start: "10:00",
      end: "11:00",
      stage: "Hanggar",
      color: "bg-green-500",
      time: "10:00 - 11:00",
    },
    // Add more Sunday events as needed
  ],
};
</script>
