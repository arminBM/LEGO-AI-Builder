import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  function addToCart(product) {
    const existing = items.value.find((item) => item.title === product.title)

    if (existing) {
      existing.qty++
    } else {
      items.value.push({
        ...product,
        qty: 1,
      })
    }
  }

  function removeItem(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  // 🔥 THE COUNTER YOU ARE MISSING
  const count = computed(() => items.value.reduce((sum, item) => sum + item.qty, 0))

  // 🔥 Total price
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0),
  )

  return {
    items,
    addToCart,
    removeItem,
    totalPrice,
    count, // <-- THIS WAS MISSING
  }
})
