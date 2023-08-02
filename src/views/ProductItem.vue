<template>
	<ProductDetail :product="currentProduct" />
</template>

<script setup>
	import api from '@/api/api'
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import ProductDetail from '@/components/ProductDetail.vue'

	const route = useRoute()
	const productId = ref('')
	const currentProduct = ref({})

	onMounted(async () => {
		productId.value = route.params.id
		currentProduct.value = await api.getProduct(productId.value)
	})
</script>
