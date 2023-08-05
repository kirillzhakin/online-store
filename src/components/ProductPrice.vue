<template>
	<ui :class="isPrice ? 'price' : ''">
		<li class="price__btn" v-for="price of dataPrice">
			<Button
				color="var(--primary)"
				:padding="padding"
				height="auto"
				@click="selectValue(price)"
				>Price: {{ price }}
			</Button>
		</li>
	</ui>
</template>

<script lang="ts" setup>
	import Button from '@/components/UI/Button.vue'
	import { useUserStore } from '@/stores/user'

	const userStore = useUserStore()

	const dataPrice = ['min', 'max']
	const props = defineProps({
		padding: {
			type: String,
			required: false
		},
		isPrice: {
			type: Boolean,
			required: false
		}
	})

	const selectValue = (price: string): void => {
		userStore.addSelectedProductsPrice(price)
	}
</script>

<style lang="scss" scoped>
	.price {
		display: flex;
		height: 31px;
		margin: 10px 0;
		align-items: center;
		&__btn {
			margin: 0 22px;
			color: var(--gray);
			list-style-type: none;
			@media screen and (max-width: 620px) {
				display: block;
				margin: 0 0 20px 0;
			}
		}
	}
</style>
