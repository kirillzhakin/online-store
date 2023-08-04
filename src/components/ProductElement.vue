<template>
	<div class="product">
		<router-link :to="`products/${product.id}`" class="product-link">
			<img
				:src="
					product.image.length === 0 ? '/img/no-image.jpg' : product.image[0]
				"
				:alt="product.title"
				class="product-image"
			/>
		</router-link>
		<div class="product-container">
			<div class="product-about">
				<router-link :to="`products/${product.id}`" class="product-name"
					>{{ product.title }}
				</router-link>
				<span class="product-price">{{ product.price }} $</span>
			</div>
			<button @click="toggleToCart(product)" class="product-add">
				<img v-if="!isInCart" src="/svg/addcart.svg" alt="add to cart" />
				<img v-else src="/svg/trash.svg" alt="remove to cart" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive, onMounted, toRef } from 'vue'
	import { useCartStore } from '@/stores/cart'
	import type { Product } from '@/types/product'

	const isInCart = ref<boolean>(false)
	const cartStore = useCartStore()

	const props = defineProps({
		product: {
			type: Object as () => Product,
			default: () => ({} as Product),
			required: true
		}
	})
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
		display: flex;
		flex-direction: column;
		&-link {
			height: 400px;
			margin-bottom: 24px;
		}
		&-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: opacity, 0s, ease-out, 0.4s;
			&:hover {
				opacity: 0.5;
			}
		}
		&-container {
			display: flex;
			justify-content: space-between;
		}
		&-about {
			display: flex;
			flex-direction: column;
			max-width: 150px;
		}

		&-name {
			font-size: 20px;
			font-family: var(--inter);
			margin-bottom: 8px;
			color: var(--primary);
			text-decoration: none;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			transition: opacity, 0s, ease-out, 0.6s;
			@media screen and (max-width: 620px) {
				font-size: 16px;
			}
			&:hover {
				opacity: 0.5;
			}
		}
		&-price {
			color: var(--primary);
			font-size: 18px;
			@media screen and (max-width: 620px) {
				font-size: 15px;
			}
		}
		&-add {
			width: 24px;
			height: 24px;
			border: none;
			background: none;
			cursor: pointer;
			padding: 0;
			outline: none;
			margin: 0 10px 0 0;
			transition: opacity, 0s, ease-out, 0.6s;
			&:hover {
				opacity: 0.5;
			}
		}
	}
</style>
