<template>
	<div class="products-container">
		<div class="products">
			<transition-group name="list">
				<ProductElement
					v-for="product of products"
					:product="product"
					:key="product.id"
				/>
			</transition-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import ProductElement from '@/components/ProductElement.vue'
	import type { Product } from '@/types/product'

	const props = defineProps({
		products: {
			type: Array as () => Product[],
			required: true
		}
	})
</script>

<style lang="scss" scoped>
	.list-enter-active,
	.list-leave-active,
	.list-move {
		transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
		transition-property: opacity, transform;
	}

	.list-enter {
		opacity: 0;
		transform: translateX(50px) scaleY(0.5);
	}

	.list-enter-to {
		opacity: 1;
		transform: translateX(0) scaleY(1);
	}

	.list-leave-active {
		position: absolute;
	}

	.list-leave-to {
		opacity: 0;
		transform: scaleY(0);
		transform-origin: center top;
	}
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
