import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import api from '@/api/api'

export const useProductsStore = defineStore('productsStore', () => {
	const products = ref([])

	const fetchProducts = async () => {
		products.value = await api.getProducts()
	}

	const uniqueCategory = computed(() => {
		const uniqueCategory = new Set()
		products.value.forEach(product => uniqueCategory.add(product.category))
		uniqueCategory.add('all products')
		return uniqueCategory
	})

	const includeProductsByCategory = products => {
		const userStore = useUserStore()
		if (userStore.selectedProducts.length === 0) return true
		return userStore.selectedProducts.includes(products.category)
	}

	const filtredProducts = computed(() => {
		return products.value.filter(product => includeProductsByCategory(product))
	})

	return {
		fetchProducts,
		uniqueCategory,
		filtredProducts
	}
})
