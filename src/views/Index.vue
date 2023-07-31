<template>
	<Cover />
	<AboutBrand />
	<Loader v-if="loading" />
	<Products v-else :products="productsData" />
</template>

<script setup>
	import { onMounted, ref } from 'vue'
	import getProducts from '@/api/getProducts'

	import Loader from '@/components/UI/Loader.vue'
	import Cover from '@/components/Cover.vue'
	import AboutBrand from '@/components/AboutBrand.vue'
	import Products from '@/components/Products.vue'

	const loading = ref(true)
	const productsData = ref([])

	onMounted(async () => {
		const { products } = await getProducts()
		productsData.value = products
		loading.value = false
	})
</script>

<style lang="scss" scoped></style>
