import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
	const selectedProducts = ref([])

	const addSelectedProducts = products => {
		console.log('addSelectedProduct')
		console.log(products)
		selectedProducts.value = products
	}
	const allProducts = () => {
		selectedProducts.value = []
	}

	return { addSelectedProducts, allProducts, selectedProducts }
})
