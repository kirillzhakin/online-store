import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import { getProducts } from '@/api/api'
import type { Product } from '@/types/product'

export const useProductsStore = defineStore('productsStore', () => {
	const products = ref<Product[]>([])

	const fetchProducts = async (): Promise<void> => {
		products.value = await getProducts()
	}

	const uniqueCategory = computed<string[]>(() => {
		const uniqueCategories = new Set<string>()
		products.value.forEach(product => uniqueCategories.add(product.category))
		uniqueCategories.add('all products')
		return Array.from(uniqueCategories)
	})

	const includeProductsByCategory = (product: Product): boolean => {
		const userStore = useUserStore()
		if (userStore.selectedProducts.length === 0) return true
		return userStore.selectedProducts.includes(product.category)
	}

	const filteredProducts = computed<Product[]>(() => {
		return products.value.filter(product => includeProductsByCategory(product))
	})

	return {
		fetchProducts,
		uniqueCategory,
		filteredProducts
	}
})
