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
		uniqueCategories.add('All products')
		return Array.from(uniqueCategories)
	})

	const includeProductsByCategory = (product: Product): boolean => {
		const userStore = useUserStore()
		if (userStore.selectedProductsCategory.length === 0) return true
		return userStore.selectedProductsCategory.includes(product.category)
	}
	const sortProductsByPrice = (a: Product, b: Product): number => {
		const userStore = useUserStore()
		if (userStore.selectedProductsPrice === 'min') {
			if (a.price === b.price) {
				return a.title.localeCompare(b.title)
			} else {
				return a.price - b.price
			}
		} else if (userStore.selectedProductsPrice === 'max') {
			if (a.price === b.price) {
				return b.title.localeCompare(a.title)
			} else {
				return b.price - a.price
			}
		}
		return 0
	}
	const includeProductsBySearch = (product: Product): boolean => {
		const userStore = useUserStore()
		return product.title
			.toLowerCase()
			.includes(userStore.productSearchTerm.toLowerCase())
	}

	const filteredProducts = computed<Product[]>(() => {
		return products.value
			.filter(product => includeProductsByCategory(product))
			.filter(product => includeProductsBySearch(product))
			.sort((a, b) => sortProductsByPrice(a, b))
	})

	return {
		fetchProducts,
		uniqueCategory,
		filteredProducts
	}
})
