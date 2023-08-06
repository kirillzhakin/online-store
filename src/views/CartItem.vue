<template>
	<Loader v-if="loading" />
	<div v-else>
		<CartDetail />
		<AllProducts :products="cartProducts" />
	</div>
</template>

<script lang="ts" setup>
	import { onMounted, ref } from 'vue'
	import Loader from '@/components/UI/Loader.vue'
	import CartDetail from '@/components/CartDetail.vue'
	import AllProducts from '@/components/AllProducts.vue'
	import type { Product } from '@/types/product'

	const loading = ref<boolean>(true)
	const cartProducts = ref<Product[]>([])

	onMounted(() => {
		const cartInLocalStorage = localStorage.getItem('cart')
		if (cartInLocalStorage) {
			cartProducts.value = JSON.parse(cartInLocalStorage)
		}
		loading.value = false
	})
</script>

<style scoped></style>
