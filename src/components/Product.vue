<template>
	<div class="product">
		<router-link :to="`/${id}`" class="product-link">
			<img :src="thumbnail" :alt="title" class="product-image" />
		</router-link>
		<div class="product-container">
			<div class="product-about">
				<router-link :to="`/${id}`" class="product-name"
					>{{ title }}
				</router-link>
				<span class="product-price">{{ price }} $</span>
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
		id: {
			type: String,
			required: true
		},
		thumbnail: {
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
			font-family: var(--satoshi);
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
