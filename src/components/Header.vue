<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-legoYellow shadow-[0_2px_0_rgba(0,0,0,0.2)]"
  >
    <div
      class="max-w-[1200px] mx-auto px-6 py-2 flex items-center justify-between gap-6"
    >
      <!-- LEFT SIDE -->
      <div class="flex items-center gap-8">
        <!-- Logo -->
         <router-link to="/" class="flex items-center">
 <img
            src="/assets/LOGO.png"
            alt="LEGO Logo"
            class="h-10 w-auto"
          />
         </router-link>
         
     

        <!-- NAV LINKS -->
        <nav
          class="hidden md:flex items-center gap-6 uppercase tracking-wide font-semibold text-[0.85rem]"
        >
          <a href="#builder"
            class="px-3 py-1 rounded-md transition-all duration-200 hover:bg-white hover:text-red-500"
          >
            Shop
          </a>

          <a href="#digital-world"
            class="px-3 py-1 rounded-md transition-all duration-200 hover:bg-white hover:text-red-500"
          >
            Discover
          </a>

          <a href="#footer"
            class="px-3 py-1 rounded-md transition-all duration-200 hover:bg-white hover:text-red-500"
          >
            Help
          </a>

          <!-- CHRISTMAS PILL -->
          <a
            href="#builder"
            class="bg-white text-red-600 px-3 py-1 rounded-full shadow-[0_2px_0_rgba(0,0,0,0.15)]
                   hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:translate-y-[1px]
                   transition bounce-slow"
          >
            Christmas
          </a>
        </nav>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex items-center gap-4 ml-auto">
        <!-- SEARCH BAR -->
        <form
          @submit.prevent
          class="hidden md:flex items-center bg-white rounded-full px-3 py-1.5 min-w-[220px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               class="size-6">
            <path fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5
                 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1
                 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd" />
          </svg>

          <input
            type="text"
            placeholder=" To research..."
            class="border-none outline-none text-sm w-full"
          />
        </form>

        <!-- Wishlist -->
        <button
          class="text-[1.3rem] bg-transparent p-1 cursor-pointer hover:opacity-70"
          type="button"
          aria-label="Wishlist"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               class="size-6">
            <path
              d="m11.645 20.91-.007-.003-.022-.012a15.247
                 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688
                 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688
                 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313
                 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438
                 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244
                 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 
                 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </button>

        <!-- CART -->
        <router-link
          to="/cart"
          class="relative text-[1.4rem] p-1 hover:opacity-80 transition"
          aria-label="Cart"
        >
          <!-- CART ICON -->
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               class="size-6">
            <path
              d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558
                 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 
                 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 
                 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 
                 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 
                 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 
                 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 
                 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>

          <!-- CART BADGE -->
          <span
            class="absolute -top-0 -right-4 bg-black text-white text-[0.75rem]
                   font-bold rounded-full border-none px-[6px] py-[1px]
                   min-w-[22px] text-center border border-white
                   transition-all duration-150"
          >
            {{ cart.count }}
          </span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style>
@keyframes gentleBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.bounce-slow {
  animation: gentleBounce 1.5s ease-in-out infinite;
  animation-delay: 1s;
}
</style>
