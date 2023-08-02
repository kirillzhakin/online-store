import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
	const cart = ref([])
	const cartLength = computed(() => cart.value.length)

	const cartInLocalStorage = localStorage.getItem('cart')
	if (cartInLocalStorage) {
		const data = JSON.parse(cartInLocalStorage)
		console.log(data)
		cart.value = data
	}

	const addToCart = product => {
		const cartIndex = cart.value.findIndex(el => el.id === product.id)
		if (cartIndex === -1) {
			cart.value.push({ ...product })
			localStorage.setItem('cart', JSON.stringify(cart.value))
		}
	}

	const removeToCart = product => {
		const cartIndex = cart.value.findIndex(el => el.id === product.id)
		if (cartIndex !== -1) {
			cart.value = cart.value.filter(el => el.id !== product.id)
			localStorage.setItem('cart', JSON.stringify(cart.value))
		}
	}
	// const getCart = product => {
	// 	const cartIndex = cart.value.findIndex(el => el.id === product.id)
	// 	if (cartIndex !== -1) return true
	// 	return false
	// }

	return {
		addToCart,
		removeToCart,
		// getCart,
		cartLength
	}
})
