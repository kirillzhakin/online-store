<template>
	<div class="product">
		<Slider :slider="sliderItem ? sliderItem : noImage" />
		<div class="product-block">
			<div class="product-about">
				<h2 class="product-name">{{ product.title }}</h2>
				<span class="product-price">{{ product.price }}$</span>
				<ProductDescription :description="product.description" />
			</div>

			<Button
				v-if="!isInCart"
				@click="toggleToCart(product)"
				background="#2a254b"
				>Add to Cart
			</Button>
			<Button v-else @click="toggleToCart(product)" background="#FF9F00"
				>Remove to Cart</Button
			>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive, onMounted, toRef } from 'vue'

	import Button from '@/components/UI/Button.vue'
	import Slider from '@/components/Slider.vue'
	import ProductDescription from '@/components/ProductDescription.vue'
	import { useCartStore } from '@/stores/cart'
	import type { Product } from '@/types/product'
	import type { Image } from '@/types/image'

	const props = defineProps({
		product: {
			type: Object as () => Product,
			default: () => ({} as Product),
			required: true
		}
	})
	const noImage: Image[] = [
		{
			id: 1,
			img: '/img/no-image.jpg'
		}
	]
	const sliderItem: Image[] = [
		{
			id: 1,
			img: '/img/top_1.jpg'
		},
		{
			id: 2,
			img: '/img/top_2.jpg'
		},
		{
			id: 3,
			img: '/img/top_3.jpg'
		},
		{
			id: 4,
			img: '/img/top_4.jpg'
		}
	]

	const cartStore = useCartStore()

	const isInCart = ref<boolean>(false)
	const propProduct = reactive({ product: toRef(props, 'product') })

	onMounted(() => {
		const cartInLocalStorage = localStorage.getItem('cart')
		if (cartInLocalStorage) {
			const prodId = propProduct.product.id
			const data: Product[] = JSON.parse(cartInLocalStorage)
			data.find(item =>
				item.id === prodId ? (isInCart.value = true) : (isInCart.value = false)
			)
		}
	})

	const toggleToCart = (product: Product): void => {
		cartStore.toggleToCart(product)
		if (isInCart.value === false) {
			isInCart.value = true
		} else {
			isInCart.value = false
		}
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
	}
</style>
