<template>
	<div class="product">
		<router-link to="/">
			<img :src="img" :alt="title" class="product-image" />
		</router-link>
		<div class="product-container">
			<div class="product-about">
				<router-link to="/" class="product-name">{{ title }} </router-link>
				<span class="product-price">{{ price }} руб.</span>
			</div>

			<button @click="isInBasket = !isInBasket" class="product-add">
				<img v-if="isInBasket" src="/svg/trash.svg" alt="Корзина" />
				<img v-else src="/svg/addcart.svg" alt="Добавить в корзину" />
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const isInBasket = ref(false)

	const props = defineProps({
		img: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		price: {
			type: String,
			required: true
		}
	})
</script>

<style lang="scss" scoped>
	.product {
		&-image {
			display: block;
			width: 100%;
			margin-bottom: 24px;
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
		}
		&-add {
			width: 24px;
			height: 24px;
			border: none;
			background: none;
			cursor: pointer;
			padding: 0;
			outline: none;
			margin: 0 10px auto auto;
			transition: opacity, 0s, ease-out, 0.6s;
			&:hover {
				opacity: 0.5;
			}
		}
		&-name {
			font-size: 20px;
			font-family: var(--satoshi);
			margin-bottom: 8px;
			color: var(--primary);
			text-decoration: none;
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
	}
</style>
