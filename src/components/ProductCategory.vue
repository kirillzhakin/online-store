<template>
	<ui :class="isCategory ? 'category' : ''">
		<li
			v-for="category of uniqueCategory"
			:key="category"
			class="category__btn"
		>
			<Button
				color="var(--primary)"
				:padding="padding"
				height="auto"
				@click="selectValue(category)"
			>
				{{ category }}
			</Button>
		</li>
	</ui>
</template>

<script lang="ts" setup>
	import { computed } from 'vue'
	import { useProductsStore } from '@/stores/products'
	import { useUserStore } from '@/stores/user'

	import Button from '@/components/UI/Button.vue'
	import type { ComputedRef } from 'vue'

	const props = defineProps({
		padding: {
			type: String,
			required: false
		},
		isCategory: {
			type: Boolean,
			required: true
		}
	})

	const userStore = useUserStore()
	const productsStore = useProductsStore()

	const uniqueCategory: ComputedRef<string[]> = computed(
		() => productsStore.uniqueCategory
	)

	const selectValue = (category: string): void => {
		if (category === 'All products') return userStore.allProducts()
		userStore.addSelectedProductsCategory([category])
	}
</script>

<style lang="scss" scoped>
	.category {
		display: flex;
		height: 31px;
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
