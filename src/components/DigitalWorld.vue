<template>
  <section id="digital-world" class="relative min-h-[480px] overflow-hidden">
    <!-- BACKGROUND SLIDES -->
    <div
      v-for="n in 3"
      :key="n"
      :class="[
        'digital-slide absolute inset-0 bg-cover bg-center',
        activeBg === n ? 'opacity-100' : 'opacity-0'
      ]"
      :style="{
        backgroundImage: `url('./assets/digital-${n}.jpg')`
      }"
    ></div>

    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>

    <!-- CONTENT -->
    <div v-reveal class="relative max-w-[1120px] mx-auto px-6 py-20 text-white">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
        YOUR BRICKS HAVE NO BOUNDARIES.
      </h2>

      <p class="max-w-xl opacity-90 text-base md:text-lg mb-6">
        Stop just building. Start playing. Jump through the portal into an
        expanding online multiplayer sandbox where your unique ideas become the
        main characters.
      </p>

      <button v-reveal
        class="bg-gradient-to-br from-red-600 to-orange-500 text-white font-bold px-8 py-3 rounded-full text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
      >
        🎮 ENTER THE MULTIVERSE
      </button>

      <ul class="mt-8 space-y-3">
        <li class="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-yellow-400 before:rounded-sm">
          Unlock missions and levels based on your physical set.
        </li>
        <li class="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-yellow-400 before:rounded-sm">
          Collect digital power-ups and special bricks.
        </li>
        <li class="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-yellow-400 before:rounded-sm">
          Invite friends to play together in your custom world.
        </li>
      </ul>

      <p class="mt-6 font-semibold text-yellow-300">
        Build it, scan it, and watch your creation come alive on screen.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeBg = ref(1)

onMounted(() => {
  let index = 1
  setInterval(() => {
    index = index === 3 ? 1 : index + 1
    activeBg.value = index
  }, 6000)
})
</script>

<style>
.digital-slide {
  transition: opacity 1.3s ease-in-out;
  animation: slowZoom 9s ease-in-out infinite;
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to   { transform: scale(1.04); }
}
</style>
