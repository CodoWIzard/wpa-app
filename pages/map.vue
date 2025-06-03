<template>
  <section class="w-full h-screen overflow-hidden">
    <div
      class="w-full h-full overflow-scroll touch-pan zoom-container"
      style="touch-action: none"
    >
      <img
        src="/public/officialMap.png"
        alt="Map"
        class="w-full h-auto object-contain transform scale-100 transition-transform duration-300 ease-in-out"
        id="map-image"
      />
    </div>
  </section>
</template>
<!---
<script setup>
import { onMounted } from "vue";
import panzoom from "@panzoom/panzoom";

onMounted(() => {
  const el = document.getElementById("map-image");
  const panZoomInstance = panzoom(el, {
    maxScale: 5,
    minScale: 1,
    contain: "outside",
  });

  el.addEventListener("dblclick", (e) => {
    panZoomInstance.zoomIn();
  });
});
</script>
-->
