<template>
  <Header />
  <div class="min-h-screen bg-[#FFF4CC] py-16"
  style="background-image: url('./assets/CartImg2.png');"
  >
    <div class="max-w-6xl mx-auto px-6">

      <div
        v-if="cart.items.length === 0"
        class="bg-white rounded-3xl shadow-xl p-16 text-center border-4 border-yellow-300"
      >
        <p class="text-2xl font-extrabold text-gray-700 mb-4">
          Your cart is empty.
        </p>
        <p class="text-gray-600">Add some sets and build your world!</p>
      </div>

      <!-- CART ITEMS -->
      <div v-else>
        <div
          class="bg-white rounded-3xl shadow-xl p-8 mb-10 border-4 border-yellow-300"
        >
          <div
            v-for="(item, index) in cart.items"
            :key="item.id"
            class="flex flex-col md:flex-row justify-between items-start md:items-center border-b last:border-none py-6"
          >
            <!-- ITEM INFO LEFT -->
            <div class="max-w-[60%]">
              <h2 class="text-2xl font-extrabold text-gray-900 mb-1">
                {{ item.title }}
              </h2>

              <p class="text-gray-700">
                <span class="font-semibold">Theme:</span> {{ item.theme }}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Bricks:</span> {{ item.brick_count }}
              </p>

              <!-- COLORS -->
              <div class="flex gap-2 mt-3">
                <div
                  v-for="(c, i) in item.colors"
                  :key="i"
                  :style="`background:${c}`"
                  class="w-6 h-6 rounded-full border border-gray-300 shadow-inner"
                ></div>
              </div>

              <!-- MORE DETAILS BUTTON -->
              <button
                class="mt-4 flex items-center gap-2 text-blue-600 font-bold"
                @click="toggleDetails(index)"
              >
                <span>More Details</span>

                <!-- ARROW ICON (ROTATES ON OPEN) -->
                <svg
                  :class="[
                    'w-4 h-4 transition-transform duration-300',
                    showDetails[index] ? 'rotate-180' : ''
                  ]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <!-- DETAILS DROPDOWN -->
              <transition name="fade">
                <div
                  v-if="showDetails[index]"
                  class="mt-4 p-4 rounded-xl bg-[#FFF8E5] border border-yellow-400 shadow-inner"
                >
                  <h3 class="text-lg font-extrabold text-gray-800 mb-2">
                    Set Specifications
                  </h3>

                  <ul class="text-gray-700 space-y-1">
                    <li>
                      <span class="font-semibold">Difficulty:</span>
                      {{ item.difficulty || "Intermediate" }}
                    </li>

                    <li>
                      <span class="font-semibold">Dimensions:</span>
                      {{ item.dimensions || "15cm x 10cm x 12cm" }}
                    </li>

                    <li>
                      <span class="font-semibold">Recommended Age:</span>
                      8+
                    </li>

                    <li>
                      <span class="font-semibold">Build Time:</span>
                      {{ item.brick_count > 500 ? "60–90 minutes" : "25–40 minutes" }}
                    </li>
                  </ul>

                  <!-- STORY -->
                  <p
                    class="text-gray-700 mt-4 italic"
                  >
                    "{{ item.story || 'A fun and creative build for all LEGO fans.' }}"
                  </p>
                </div>
              </transition>

            </div>

            <!-- RIGHT SIDE (QTY + PRICE) -->
            <div class="text-right mt-6 md:mt-0">
              
              <!-- QTY -->
              <div class="flex items-center gap-4 justify-end mb-3">
                <button
                  class="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lg font-bold transition"
                  @click="item.qty > 1 ? item.qty-- : null"
                >
                  -
                </button>

                <span class="text-2xl font-extrabold">
                  {{ item.qty }}
                </span>

                <button
                  class="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lg font-bold transition"
                  @click="item.qty++"
                >
                  +
                </button>
              </div>

              <!-- PRICE -->
              <p class="text-2xl font-extrabold text-gray-900 mb-3">
                €{{ item.price * item.qty }}
              </p>

              <!-- REMOVE -->
              <button
                class="text-red-600 font-bold hover:underline"
                @click="cart.removeItem(item.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <!-- CHECKOUT BOX -->
       <div
  class="bg-white shadow-xl rounded-3xl p-6 border-4 border-yellow-300
         w-full md:w-[340px] ml-auto mt-10 sticky bottom-6"
>
  <div class="flex justify-between text-xl font-extrabold mb-3">
    <span>Total:</span>
    <span class="text-red-600">€{{ cart.totalPrice }}</span>
  </div>

  <button
    class="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-extrabold 
           hover:bg-red-700 transition shadow-md"
  >
    Proceed to Checkout
  </button>
</div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const cart = useCartStore();

// Track which item’s dropdown is open
const showDetails = ref({});

function toggleDetails(index) {
  showDetails.value[index] = !showDetails.value[index];
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
