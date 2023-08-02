<template>
	<div class="product">
		<router-link :to="`products/${product.id}`" class="product-link">
			<img :src="product.image" :alt="product.title" class="product-image" />
		</router-link>
		<div class="product-container">
			<div class="product-about">
				<router-link :to="`products/${product.id}`" class="product-name"
					>{{ product.title }}
				</router-link>
				<span class="product-price">{{ product.price }} $</span>
			</div>

			<button v-if="!isInCart" @click="addToCart(product)" class="product-add">
				<img src="/svg/addcart.svg" alt="Добавить в корзину" />
			</button>
			<button v-else @click="removeToCart(product)" class="product-add">
				<img src="/svg/trash.svg" alt="Корзина" />
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { useCartStore } from '@/stores/cart'

	const isInCart = ref(false)
	const cartStore = useCartStore()
	const props = defineProps({
		product: {
			type: Object,
			default: () => {},
			required: true
		}
	})

	onMounted(() => {
		console.log('Product')
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
