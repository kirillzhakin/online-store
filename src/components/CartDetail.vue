<template>
	<div class="cart">
		<div class="cart-container">
			<h2 class="cart-title">TOTAL SCORE:</h2>
			<span class="cart-score"> {{ cartStore.cartTotalScore }} $ </span>
		</div>
		<Button background="#2a254b" @click="popupStore.setIsOpen(true)"
			>Pay for products</Button
		>
		<PopupForm name="pay" title="Сard payment" buttonText="Pay">
			<CartPay />
		</PopupForm>
	</div>
</template>

<script lang="ts" setup>
	import Button from '@/components/UI/Button.vue'
	import PopupForm from '@/components/PopupForm.vue'
	import CartPay from '@/components/CartPay.vue'
	import { useCartStore } from '@/stores/cart'
	import { usePopupStore } from '@/stores/popup'

	const cartStore = useCartStore()
	const popupStore = usePopupStore()
</script>

<style lang="scss" scoped>
	.cart {
		display: flex;
		justify-content: space-between;
		padding: 60px 6% 10px 6%;
		margin-top: 82px;
		@media screen and (max-width: 620px) {
			margin-top: 0;
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
