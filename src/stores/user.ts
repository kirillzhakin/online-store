import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
	const selectedProducts = ref<string[]>([])

	const addSelectedProducts = (products: string[]): void => {
		selectedProducts.value = products
	}

	const allProducts = (): void => {
		selectedProducts.value = []
	}

	return {
		selectedProducts,
		addSelectedProducts,
		allProducts
	}
})
