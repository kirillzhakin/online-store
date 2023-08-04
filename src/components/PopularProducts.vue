<template>
	<Loader v-if="loading" />
	<AllProducts v-else :products="filteredProducts" />
</template>

<script lang="ts" setup>
	import { onMounted, ref, computed } from 'vue'
	import AllProducts from '@/components/AllProducts.vue'
	import Loader from '@/components/UI/Loader.vue'
	import { useProductsStore } from '@/stores/products'
	import type { Product } from '@/types/product'

	const loading = ref<boolean>(true)

	const productsStore = useProductsStore()

	const filteredProducts = computed<Product[]>(
		() => productsStore.filteredProducts
	)

	onMounted(async () => {
		await productsStore.fetchProducts()
		loading.value = false
	})
</script>
