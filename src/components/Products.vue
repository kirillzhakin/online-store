<template>
	<div class="products-container">
		<div class="products">
			<Product v-for="product of products" :product="product" />
		</div>
	</div>
</template>

<script setup>
	import Product from '@/components/Product.vue/'
	const props = defineProps({
		products: {
			type: Array,
			require: true
		}
	})
</script>

<style lang="scss" scoped>
	.products {
		padding: 50px 6% 0 6%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		margin-bottom: 64px;
		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 40px 20px;
		}
		@media screen and (max-width: 620px) {
			grid-template-columns: 1fr;
			padding: 36px 0 0 0;
		}
		&-container {
			margin-bottom: 56px;
		}
	}
</style>
