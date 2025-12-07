<template>
    <Header/>
  <section 
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat py-20 px-6"
    style="background-image: url('./assets/builder-bg.jpeg')"
  >
    <div class="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

      <!-- LEFT PANEL -->
      <div
        class="bg-white/50 backdrop-blur rounded-3xl p-10 shadow-xl"
      >
        <p class="text-sm font-bold tracking-widest text-red-600 mb-2">
          AI LEGO BUILDER
        </p>

        <h1 class="text-4xl font-extrabold leading-tight mb-6">
          Describe it once.<br />
          We'll build your multiverse set.
        </h1>

        <p class="text-gray-700 font-semibold leading-relaxed mb-6">
          Turn your wildest ideas into ready-to-build LEGO sets and digital avatars. 
          AI helps you design the model, estimate the price, and send it straight 
          into the LEGO Multiverse.
        </p>

        <ul class="space-y-4 text-gray-700 font-semibold">
          <li class="flex items-start gap-3">
            <span class="text-red-600 text-2xl">🧱</span>
            Smart, kid-safe AI suggestions for bricks and scenes.
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-600 text-2xl">🎮</span>
            Sync your set into games like LEGO 2K Drive.
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-600 text-2xl">📦</span>
            Get a price estimate and a box-ready description.
          </li>
        </ul>
      </div>

      <!-- RIGHT PANEL -->
      <div
        class="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200"
      >
        <h2 class="font-bold text-lg mb-2">Describe your dream LEGO set:</h2>

        <textarea
          v-model="prompt"
          placeholder="Example: A futuristic city with flying cars and robot dogs…"
          class="w-full border rounded-xl p-4 h-32 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          @click="generate"
          class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl mt-4 transition"
        >
          Generate my LEGO set
        </button>

        <hr class="my-6 border-gray-300" />

        <h3 class="font-semibold mb-2">YOUR AI CONCEPT</h3>

        <div class="min-h-[220px] bg-gray-100 rounded-xl p-4 text-gray-700 whitespace-pre-wrap">
  <template v-if="typeof result === 'object'">
    <p><strong>Name:</strong> {{ result.set_name }}</p>
    <p><strong>Theme:</strong> {{ result.theme }}</p>
    <p><strong>Brick Count:</strong> {{ result.brick_count }}</p>
    <p><strong>Difficulty:</strong> {{ result.difficulty }}</p>
    <p><strong>Colors:</strong> {{ result.colors?.join(', ') }}</p>
    <p><strong>Size:</strong> {{ result.dimensions_cm }}</p>
    <p><strong>Story:</strong> {{ result.story }}</p>
  </template>

  <template v-else>
    {{ result }}
  </template>
</div>


        <div class="mt-6 flex items-center justify-between">
          <p class="font-semibold">Estimated price: <span class="text-red-600">€{{ price }}</span></p>

        <button
  @click="flyToCart($event)"
  class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition"
>
  Add to cart
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
  </svg>
</button>

        </div>
      </div>

    </div>
  </section>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/cart'

// STATE
const prompt = ref('')
const result = ref('')
const price = ref(0)
const loading = ref(false)

const cart = useCartStore()

//  AI GENERATION (HUGGINGFACE)
// ==============================
const generate = async () => {
  if (!prompt.value.trim()) {
    result.value = "Please enter a description first."
    return
  }

  loading.value = true
  result.value = "Generating your LEGO concept…"

  // FAKE AI DELAY
  await new Promise(resolve => setTimeout(resolve, 3000))

  // Random data generators
  const themes = ["Space", "Castle", "City", "Ninjago", "Technic", "Star Wars", "Creator"]
  const difficulties = ["Easy", "Medium", "Hard", "Expert"]
  const colorsList = ["#ff0000", "#00aaff", "#ffee00", "#33dd55", "#8844ff"]

  const fake = {
    set_name: `${prompt.value.split(" ")[0]} Set`,
    theme: themes[Math.floor(Math.random() * themes.length)],
    brick_count: Math.floor(Math.random() * 800 + 150), // 150 - 950
    difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
    colors: colorsList.sort(() => 0.5 - Math.random()).slice(0, 3),
    dimensions_cm: `${Math.floor(Math.random() * 20 + 10)} x ${Math.floor(Math.random() * 20 + 10)} x ${Math.floor(Math.random() * 20 + 10)}`,
    price_eur: Math.floor(Math.random() * 80 + 20),
    story: `A unique LEGO creation inspired by "${prompt.value}", featuring dynamic elements and a rich theme narrative.`
  }

  result.value = fake
  price.value = fake.price_eur

  loading.value = false
}


// ==============================
//  FLY-TO-CART ANIMATION
// ==============================
const flyToCart = (event) => {
  const flyer = document.createElement("div")
  flyer.innerHTML = "🧱"
  flyer.style.position = "fixed"
  flyer.style.zIndex = 9999
  flyer.style.fontSize = "28px"
  flyer.style.left = event.clientX + "px"
  flyer.style.top = event.clientY + "px"

  document.body.appendChild(flyer)

  const cartIcon = document.querySelector("header a[aria-label='Cart']")
  const cartRect = cartIcon.getBoundingClientRect()

  flyer.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      {
        transform: `translate(${cartRect.left - event.clientX}px, ${
          cartRect.top - event.clientY
        }px) scale(0.2)`,
        opacity: 0.2,
      },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.3, 0.7, 0.3, 1)"
    }
  )

  setTimeout(() => {
    flyer.remove()
    cart.addToCart({
      title: result.value.set_name || "Custom LEGO Set",
      price: price.value,
      description: result.value.story || "",
      theme: result.value.theme || "",
      colors: result.value.colors || [],
      brick_count: result.value.brick_count || "",
      dimensions: result.value.dimensions_cm || ""
    })
  }, 700)
}
</script>
