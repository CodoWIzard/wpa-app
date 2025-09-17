<template>
  <div class="bg-gray-50 dark:bg-neutral-900 py-12 px-6">
    <h2
      class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10"
    >
      Featured Artists
    </h2>

    <div
      class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto"
    >
      <div
        v-for="(artist, index) in artists"
        :key="index"
        class="group relative overflow-hidden rounded-2xl shadow-lg transition hover:shadow-2xl"
      >
        <!-- Artist Image -->
        <img
          :src="artist.image"
          :alt="artist.name"
          class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4"
        >
          <h3 class="text-lg font-semibold text-white">{{ artist.name }}</h3>
          <a
            :href="artist.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-block text-sm text-white/90 hover:text-white"
          >
            🎵 Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    name: "Beard Guy",
    image: "/beard.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Long Hair",
    image: "/longHair.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Tee",
    image: "/tee.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Sigma",
    image: "/sigma.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "Electric",
    image: "/electric.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
  {
    name: "City",
    image: "/city.webp",
    youtube: "https://www.youtube.com/watch?v=FE4VcAXxXfM",
  },
];
</script>
