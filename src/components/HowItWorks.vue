<template>
  <section 
    id="how-it-works" 
    class="relative py-20 bg-white overflow-hidden"
  >

    <!-- FAINT PATTERN BACKGROUND -->
    <div 
      class="absolute inset-0 opacity-50 pointer-events-none"
      style="
        background-image: url('/public/assets/CartImg2.png');
        background-size: 450px;
        background-position: center;
        background-repeat: repeat;
        filter: contrast(70%) brightness(90%);
      "
    ></div>
    <div class="absolute inset-0 bg-[#fff3c4]/70 pointer-events-none"></div>


    <!-- CONTENT WRAPPER -->
    <div class="relative z-10 max-w-[1120px] mx-auto px-6">

      <!-- TITLE -->
      <h2 
        v-reveal
        class="text-center text-3xl md:text-4xl font-extrabold text-red-600 mb-12"
      >
        HOW IT WORKS
      </h2>

      <!-- ===== CARD 1 ===== -->
      <div v-reveal
        class="relative flex flex-col md:flex-row items-center gap-8 bg-yellow-400 text-white rounded-3xl p-10 shadow-xl mb-16"
      >
        <!-- Left Figurine -->
        <img
          src=""
          class="hidden md:block absolute left-[-130px] top-1/2 -translate-y-1/2 h-[200px] opacity-95"
        />

        <!-- Right Figurine -->
        <img
          src=""
          class="hidden md:block absolute right-[-130px] top-1/2 -translate-y-1/2 h-[200px] opacity-95"
        />

        <!-- TEXT CONTENT -->
        <div class="md:w-1/2 flex flex-col justify-center">
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-10 h-10 flex items-center justify-center rounded-full font-extrabold bg-white text-red-600 shadow"
            >
              1
            </div>
            <h3 class="text-xl font-bold">Launch the AI Builder</h3>
          </div>

          <p class="leading-relaxed">
            Don't just stack bricks—manipulate reality. Our AI Builder App turns
            your wildest prompts into buildable 3D models in seconds. Finalize
            your vision digitally before it becomes real.
          </p>
        </div>

        <!-- IMAGE -->
        <div class="md:w-1/2">
          <img src="/assets/howitworks-tablet.jpg" class="rounded-xl shadow-lg" />
        </div>
      </div>

      <!-- ===== CARD 2 ===== -->
      <div v-reveal
        class="relative flex flex-col md:flex-row-reverse items-center gap-8 bg-purple-600 text-white rounded-3xl p-10 shadow-xl mb-16"
      >
        <!-- Left Figurine -->
        <img
          src=""
          class="hidden md:block absolute left-[-130px] top-1/2 -translate-y-1/2 h-[200px] opacity-95"
        />

        <!-- Right Figurine -->
        <img
          src=""
          class="hidden md:block absolute right-[-130px] top-1/2 -translate-y-1/2 h-[200px] opacity-95"
        />

        <!-- TEXT -->
        <div class="md:w-1/2 flex flex-col justify-center">
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-10 h-10 flex items-center justify-center rounded-full font-extrabold bg-white text-purple-700 shadow"
            >
              2
            </div>
            <h3 class="text-xl font-bold">Design Once, Play Everywhere</h3>
          </div>

          <p class="leading-relaxed">
            Instantly sync your custom design into the LEGO Multiverse. Race your
            physical car in LEGO 2K Drive or battle your mech in online arenas
            around the world.
          </p>
        </div>

        <!-- IMAGE -->
        <div class="md:w-1/2">
          <img src="/assets/howitworks-controller.jpg" class="rounded-xl shadow-lg" />
        </div>
      </div>

      <!-- ===== CARD 3 ===== -->
      <div v-reveal
        class="relative flex flex-col md:flex-row items-center gap-8 bg-red-600 text-white rounded-3xl p-10 shadow-xl"
      >
        <!-- Left Figurine -->
        <img
          src=""
          class="hidden md:block absolute left-[-130px] top-1/2 -translate-y-1/2 h-[200px] opacity-95"
        />

        <!-- Right Figurine -->
        <img
          src=""
          class="hidden md:block absolute right-[-130px] top-1/2 -translate-y-1/2 h-[200px] opacity-95"
        />

        <!-- TEXT -->
        <div class="md:w-1/2 flex flex-col justify-center">
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-10 h-10 flex items-center justify-center rounded-full font-extrabold bg-white text-red-600 shadow"
            >
              3
            </div>
            <h3 class="text-xl font-bold">
              Physical Production: We Print Your Set
            </h3>
          </div>

          <p class="leading-relaxed">
            We bring the pixels to life with cutting-edge 3D brick-printing technology
            and modular packaging to ship the physical version of your creation
            straight to your door.
          </p>
        </div>

        <!-- IMAGE -->
        <div class="md:w-1/2">
          <img src="/assets/howitworks-robot.jpg" class="rounded-xl shadow-lg" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// no logic needed
</script>
