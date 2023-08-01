<template>
	<Loader v-if="loading" />
	<Products v-else :products="productsData" />
</template>

<script setup>
	import { onMounted, ref } from 'vue'

	import api from '@/api/api'
	import Products from '@/components/Products.vue'
	import Loader from '@/components/UI/Loader.vue'

	const loading = ref(true)
	const productsData = ref([])

	onMounted(async () => {
		const { products } = await api.getProducts()
		productsData.value = products
		loading.value = false
	})
</script>
