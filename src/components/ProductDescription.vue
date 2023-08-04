<template>
	<div class="product-description">
		<div class="product-description-top" @click="open">
			<span class="product-description__title">Product description</span>
			<img
				v-if="isOpen"
				class="product-description__icon"
				src="/svg/left.svg"
				alt="top"
			/>
			<img
				v-else
				class="product-description__icon"
				src="/svg/right.svg"
				alt="bottom"
			/>
		</div>
		<div v-if="isOpen">{{ description }}</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const props = defineProps({
		description: {
			type: String,
			required: false
		}
	})

	const isOpen = ref<boolean>(false)

	const open = () => {
		isOpen.value = !isOpen.value
	}
</script>

<style lang="scss" scoped>
	.product-description {
		display: flex;
		flex-direction: column;
		cursor: pointer;
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
			font-size: 20px;
			@media screen and (max-width: 620px) {
				font-size: 16px;
			}
		}
		&__icon {
			width: 24px;
			height: 24px;
			transform: rotate(90deg);
			transition: opacity, 0s, ease-out, 0.6s;
			@media screen and (max-width: 620px) {
				height: 32px;
			}
			&:hover {
				opacity: 0.5;
			}
		}
		&-top {
			display: flex;
			justify-content: space-between;
			@media screen and (max-width: 620px) {
				margin-bottom: 10px;
			}
		}
	}
</style>
