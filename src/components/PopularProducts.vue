<template>
	<Loader v-if="loading" />
	<Products v-else :products="filteredProducts" />
</template>

<script lang="ts" setup>
	import { onMounted, ref, computed } from 'vue'
	import Products from '@/components/Products.vue'
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
