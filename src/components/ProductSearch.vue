<template>
	<div class="text-field">
		<input
			v-model="productSearchTerm"
			@input="handleInput"
			type="text"
			name="search"
			id="search"
			class="text-field__input"
			placeholder="Search"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue'
	import { useUserStore } from '@/stores/user'

	const userStore = useUserStore()

	const debounceTime = 300
	const timeoutRef = ref<ReturnType<typeof setTimeout> | undefined>()

	const productSearchTerm = computed(() => userStore.productSearchTerm)
	const handleInput = (event: Event) => {
		clearTimeout(timeoutRef.value as undefined)
		const value = (event.target as HTMLInputElement).value.trim()
		timeoutRef.value = setTimeout(() => {
			userStore.updateProductSearchTerm(value)
		}, debounceTime)
	}
</script>

<style lang="scss" scoped>
	.text-field {
		&__input {
			display: block;
			width: 100%;
			padding: 0.1rem 0.35rem;
			font-family: inherit;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			color: #212529;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 0.25rem;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}
		&__input::placeholder {
			color: #212529;
			opacity: 0.4;
			font-size: 16px;
		}
		&__input:focus {
			color: #212529;
			background-color: #fff;
			border-color: #bdbdbd;
			outline: 0;
			box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
		}
		&__input:disabled,
		&__input[readonly] {
			background-color: #f5f5f5;
			opacity: 1;
		}
	}
</style>
