<template>
	<div class="product">
		<div class="product-block">
			<img class="product-image" :src="product.image" :alt="product.title" />
		</div>
		<div class="product-block">
			<div class="product-about">
				<h2 class="product-name">{{ product.title }}</h2>
				<span class="product-price">{{ product.price }}$</span>
				<div class="product-description">
					<span class="product-description__title">Product description</span>
					<div>{{ product.description }}</div>
				</div>
			</div>
			<Button
				v-if="!isInCart"
				@click="addToCart(product)"
				background="#2a254b"
				color="#fff"
				>Add to Cart</Button
			>
			<Button
				v-else
				@click="removeToCart(product)"
				background="#FF9F00"
				color="#fff"
				>Remove to Cart</Button
			>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'

	import Button from '@/components/UI/Button.vue'
	import { useCartStore } from '@/stores/cart'

	const props = defineProps({
		product: {
			type: Object,
			default: () => {},
			required: true
		}
	})
	const cartStore = useCartStore()
	const isInCart = ref(false)

	onMounted(() => {
		console.log('ProductDetail')
	})

	const addToCart = product => {
		cartStore.addToCart(product)
		isInCart.value = true
	}
	const removeToCart = product => {
		cartStore.removeToCart(product)
		isInCart.value = false
	}
</script>

<style lang="scss" scoped>
	.product {
		background: var(--lightgray);
		font-family: var(--clash);

		padding: 50px 50px 50px 0;
		display: grid;
		grid-template-columns: minmax(auto, 500px) minmax(auto, 500px);
		column-gap: 65px;
		align-items: center;
		margin-bottom: 65px;
		@media screen and (max-width: 620px) {
			display: flex;
			flex-direction: column;
			padding: 0 0 30px 0;
			margin: 47px 0 32px 0;
		}
		&-block {
			height: 100%;
			width: 100%;
		}
		&-about {
			@media screen and (max-width: 620px) {
				display: flex;
				flex-direction: column;
				width: 100%;
				padding: 0 24px;
			}
		}
		&-image {
			height: 100%;
			width: 100%;
			object-fit: cover;
			@media screen and (max-width: 620px) {
				margin-bottom: 28px;
			}
		}
		&-name {
			margin: 0 0 16px 0;
			font-size: 36px;
			@media screen and (max-width: 620px) {
				font-size: 26px;
			}
		}
		&-price {
			display: block;
			font-size: 24px;
			margin-bottom: 28px;
			@media screen and (max-width: 620px) {
				font-size: 18px;
			}
		}
		&-description {
			border-top: 1px solid var(--border-grey);
			padding-top: 24px;
			margin-bottom: 24px;
			@media screen and (max-width: 620px) {
				font-size: 14px;
			}
			&__title {
				display: block;
				margin-bottom: 14px;
				font-family: var(--clash);
				@media screen and (max-width: 620px) {
					font-size: 14px;
				}
			}
		}
	}
</style>
