<template>
	<div class="cart">
		<div class="cart-container">
			<h2 class="cart-title">TOTAL SCORE:</h2>
			<span class="cart-score"> {{ cartStore.cartTotalScore }} $ </span>
		</div>
		<Button background="#2a254b">Pay for products</Button>
	</div>
</template>

<script lang="ts" setup>
	import Button from '@/components/UI/Button.vue'
	import { useCartStore } from '@/stores/cart'
	const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
	.cart {
		display: flex;
		justify-content: space-between;
		padding: 60px 6% 10px 6%;
		@media screen and (max-width: 620px) {
			flex-direction: column;
			padding: 106px 0 0 0;
		}
		&-container {
			display: flex;
			justify-content: space-between;
			@media screen and (max-width: 620px) {
				margin-bottom: 45px;
			}
		}
		&-title {
			margin: 0 10px 0 0;
			display: flex;
			align-items: center;
			text-align: center;
			color: var(--primary);
			@media screen and (max-width: 500px) {
				font-size: 1.2rem;
			}
		}
		&-score {
			display: flex;
			align-items: center;
			text-align: center;
			font-size: 1.5rem;
			color: var(--primary);
			@media screen and (max-width: 500px) {
				font-size: 1.2rem;
			}
		}
	}
</style>
