<template>
	<Loader v-if="loading" />
	<Products v-else :products="filtredProducts" />
</template>

<script setup>
	import { onMounted, ref, computed } from 'vue'
	import Products from '@/components/Products.vue'
	import Loader from '@/components/UI/Loader.vue'
	import { useProductsStore } from '@/stores/products'

	const loading = ref(true)

	const productsStore = useProductsStore()
	const filtredProducts = computed(() => productsStore.filtredProducts)

	onMounted(() => {
		productsStore.fetchProducts()
		loading.value = false
	})
</script>
