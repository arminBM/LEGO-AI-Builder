<template>
  <section
    id="builder"
    class="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/assets/HeroSectionImg.jpg');"
  >
    <!-- DARK OVERLAY -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20"
    ></div>

    <!-- CONTENT -->
    <div
      class="relative max-w-[1120px] w-full mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 text-white"
    >
      <!-- TEXT -->
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          You Imagine. AI Designs. We Deliver.
        </h1>
        <p class="mt-4 max-w-lg text-base md:text-lg">
          Describe your dream. We build the real set for your hands and the
          avatar for your game.
        </p>
      </div>

      <!-- BUTTON -->
      <div class="flex items-center justify-start md:justify-end relative">
       <RouterLink to="/builder">
 <button
          @click="goToBuilder"
          class="bg-gradient-to-br from-red-600 to-orange-500 text-white font-extrabold text-lg md:text-xl px-10 py-4 rounded-xl shadow-2xl transform transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
        >
          BUILD IT NOW
        </button>
       </RouterLink>
       
      </div>
    </div>
  </section>
</template>

<script setup>
const goToBuilder = () => {
  window.location.href = "#builder"
}
</script>
