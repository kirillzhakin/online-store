<template>
	<Loader v-if="loading" />
	<transition v-else name="fade">
		<ProductDetail :product="currentProduct" />
	</transition>
</template>

<script setup>
	import api from '@/api/api'
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import ProductDetail from '@/components/ProductDetail.vue'
	import Loader from '@/components/UI/Loader.vue'
	const loading = ref(true)

	const route = useRoute()
	const productId = ref('')
	const currentProduct = ref({})

	onMounted(async () => {
		productId.value = route.params.id
		currentProduct.value = await api.getProduct(productId.value)
		loading.value = false
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
