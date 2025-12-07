<template>
  <button 
    v-show="visible"
    @click="scrollTop"
    class="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg 
           hover:bg-red-700 transition-all duration-300 z-50 flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="2"
         stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 300
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
