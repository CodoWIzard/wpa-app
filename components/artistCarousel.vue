<template>
  <div class="overflow-hidden whitespace-nowrap py-6 bg-gray-100 dark:bg-white">
    <div
      class="flex gap-10 px-4 animate-scroll"
      @mouseover="pause = true"
      @mouseleave="pause = false"
      :class="{ 'animation-pause': pause }"
    >
      <!-- duplicate list for seamless loop -->
      <div
        v-for="(artist, index) in loopedArtists"
        :key="index"
        class="flex-shrink-0"
      >
        <a :href="artist.youtube" target="_blank" rel="noopener noreferrer">
          <img
            :src="artist.image"
            :alt="artist.name"
            class="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover transition-transform duration-300 hover:scale-125"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const pause = ref(false);

const artists = [
  {
    name: "Artist One",
    image: "/blackShirt.webp",
    youtube: "https://www.youtube.com/watch?v=video1",
  },
  {
    name: "Kensington",
    image: "/threeGuys.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "/beard.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "longHair.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "tee.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "sigma.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "electric.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "city.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "suitMen.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "sittingFloor.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Artist Three",
    image: "triangle.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
];
const loopedArtists = computed(() => [...artists, ...artists]);
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animation-pause {
  animation-play-state: paused;
}
</style>
