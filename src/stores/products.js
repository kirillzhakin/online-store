import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/api'

export const useProductsStore = defineStore('productsStore', () => {
	const products = ref([])

	const fetchProducts = async () => {
		products.value = await api.getProducts()
	}

	const uniqueCategory = () => {
		const uniqueCategory = new Set()
		products.value.forEach(product => uniqueCategory.add(product.category))
		console.log('uniqueCategory')
		console.log(uniqueCategory)
		return uniqueCategory
	}

	const filtredProducts = () => {
		console.log('filtredProducts')
		return products.value
	}

	return {
		fetchProducts,
		uniqueCategory,
		filtredProducts
	}
})
