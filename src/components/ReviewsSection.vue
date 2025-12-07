<template>
  <section id="reviews" class="py-5 bg-white">
    <h2 class="text-center text-3xl md:text-4xl font-extrabold text-black mb-12">
      Builders Love It
    </h2>

    <!-- CAROUSEL WRAPPER -->
    <div
      class="overflow-hidden relative group"
    >
      <!-- Moving track -->
      <div class="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">

        <!-- Duplicate list twice for seamless infinite scroll -->
        <template v-for="i in 2" :key="i">
         <article
  v-for="r in reviews"
  :key="r.name"
  class="min-w-[230px] bg-white rounded-xl shadow-md p-4 text-center 
         border border-black/10 transition-all duration-300 
         hover:translate-y-[2px] hover:shadow-lg active:translate-y-[3px]"
>
  <img
    :src="r.img"
    :alt="r.name + ' avatar'"
    class="w-16 h-16 object-cover rounded-full mx-auto mb-2 shadow-sm"
  />

  <p class="text-yellow-500 text-base font-bold mb-1">★★★★★</p>

  <h3 class="font-bold text-[16px] mb-1">{{ r.name }}</h3>

  <p class="text-gray-700 leading-snug text-[13px]">
    {{ r.text }}
  </p>
</article>


        </template> 

      </div>
    </div>
    
  </section>
</template>


<script setup>
const reviews = [
  {
    name: "Amir & Nika",
    img: "/assets/amir-nika.png",
    text: "“Our kids love seeing their characters become real sets.”",
  },
  {
    name: "Maya",
    img: "/assets/maya.png",
    text: "“The AI Builder feels like magic. My hover-bike turned out perfect.”",
  },
  {
    name: "Jonas",
    img: "/assets/jonas.png",
    text: "“Smart part suggestions saved me hours when planning MOCs.”",
  },
  {
    name: "Lila & Arman",
    img: "/assets/lila-arman.png",
    text: "“We argued less and built more. The AI helps us collaborate.”",
  },
  {
    name: "Olivia",
    img: "/assets/olivia.png",
    text: "“Kids adore seeing their designs printed as real boxes.”",
  },
  {
    name: "Diego",
    img: "/assets/diego.png",
    text: "“I built my robot and raced the digital version online.”",
  },
]
</script>

<!-- Fade-in animation using Tailwind -->
<style>
@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}
</style>

