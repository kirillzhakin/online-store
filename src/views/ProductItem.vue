<template>
	<Loader v-if="loading" />
	<transition v-else name="fade">
		<ProductDetail :product="currentProduct" />
	</transition>
</template>

<script lang="ts" setup>
	import { getProduct } from '@/api/api'
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'

	import ProductDetail from '@/components/ProductDetail.vue'
	import Loader from '@/components/UI/Loader.vue'
	import type { Product } from '@/types/product'

	const loading = ref<boolean>(true)

	const route = useRoute()
	const productId = ref<number>()
	const currentProduct = ref<Product>({} as Product)

	onMounted(async () => {
		productId.value = Number(route.params.id)
		const productData = await getProduct(productId.value)
		if (productData !== null) {
			currentProduct.value = productData
			loading.value = false
		}
	})
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
