import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
	const selectedProductsCategory = ref<string[]>([])
	const selectedProductsPrice = ref<string>('')
	const productSearchTerm = ref<string>('')

	const addSelectedProductsCategory = (products: string[]): void => {
		selectedProductsCategory.value = products
	}
	const addSelectedProductsPrice = (products: string): void => {
		selectedProductsPrice.value = products
	}
	const updateProductSearchTerm = (term: string): void => {
		productSearchTerm.value = term
	}

	const allProducts = (): void => {
		selectedProductsCategory.value = []
		selectedProductsPrice.value = ''
		productSearchTerm.value = ''
	}

	return {
		selectedProductsCategory,
		selectedProductsPrice,
		productSearchTerm,
		addSelectedProductsCategory,
		addSelectedProductsPrice,
		updateProductSearchTerm,
		allProducts
	}
})
