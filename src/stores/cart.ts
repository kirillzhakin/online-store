import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

export const useCartStore = defineStore('cartStore', () => {
	const cart = ref<Product[]>([])
	const cartLength = computed<number>(() => cart.value.length)
	const cartProducts = computed<Product[]>(() => cart.value)
	const cartTotalScore = computed<number>(() => {
		const totalPrice = cart.value.reduce((a, b) => a + b.price, 0)
		return parseFloat(totalPrice.toFixed(2))
	})

	const cartInLocalStorage = localStorage.getItem('cart')
	if (cartInLocalStorage) {
		const data = JSON.parse(cartInLocalStorage)
		cart.value = data
	}

	const toggleToCart = (product: Product): void => {
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
		cartLength,
		cartProducts,
		cartTotalScore,
		toggleToCart
	}
})
