import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
	const cart = ref([])
	const cartLength = computed(() => cart.value.length)

	const cartInLocalStorage = localStorage.getItem('cart')
	if (cartInLocalStorage) {
		const data = JSON.parse(cartInLocalStorage)
		cart.value = data
	}

	const toggleToCart = product => {
		const cartIndex = cart.value.findIndex(el => el.id === product.id)
		if (cartIndex === -1) {
			cart.value.push({ ...product })
			localStorage.setItem('cart', JSON.stringify(cart.value))
		} else if (cartIndex !== -1) {
			cart.value = cart.value.filter(el => el.id !== product.id)
			localStorage.setItem('cart', JSON.stringify(cart.value))
		}
	}

	return {
		toggleToCart,
		cartLength
	}
})
