<template>
	<div class="products-container">
		<div class="products">
			<Product
				v-for="product of products"
				:id="product.id"
				:key="product.id"
				:thumbnail="product.thumbnail"
				:title="product.title"
				:price="product.price"
			/>
		</div>
		<div class="products-link">
			<ui-button background="#F9F9F9" type="link" to="/"
				>View collection</ui-button
			>
		</div>
	</div>
</template>

<script setup>
	import Product from '@/components/Product.vue/'
	import uiButton from '@/components/UI/Button.vue'
	const props = defineProps({
		products: {
			type: Array,
			require: true
		}
	})
</script>

<style lang="scss" scoped>
	.products {
		padding: 0 6%;
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
			padding: 0;
		}
		&-container {
			margin-bottom: 56px;
		}
		&-link {
			display: flex;
			justify-content: center;
		}
	}
</style>
