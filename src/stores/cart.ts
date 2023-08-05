import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

export const useCartStore = defineStore('cartStore', () => {
	const cart = ref<Product[]>([])
	const cartProducts = computed<Product[]>(() => cart.value)
	const cartLength = computed<number>(() => cart.value.length)

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
		cartProducts,
		cartLength,
		toggleToCart
	}
})
