import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
	const selectedProducts = ref<string[]>([])
	const productSearchTerm = ref<string>('')

	const addSelectedProducts = (products: string[]): void => {
		selectedProducts.value = products
	}
	const updateProductSearchTerm = (term: string): void => {
		productSearchTerm.value = term
	}

	const allProducts = (): void => {
		selectedProducts.value = []
		productSearchTerm.value = ''
	}

	return {
		selectedProducts,
		productSearchTerm,
		addSelectedProducts,
		updateProductSearchTerm,
		allProducts
	}
})
