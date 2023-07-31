<template>
	<button
		v-if="type === 'button'"
		class="button"
		:style="{ backgroundColor: background }"
	>
		<slot></slot>
	</button>
	<router-link
		v-else
		:to="to"
		class="button"
		:style="{ backgroundColor: background }"
	>
		<slot></slot>
	</router-link>
</template>

<script setup>
	const props = defineProps({
		background: {
			type: String,
			requred: false
		},
		type: {
			type: String,
			default: 'button'
		},
		to: {
			type: String,
			requred: false
		}
	})
</script>

<style lang="scss" scoped>
	.button {
		background: #fff;
		color: var(--primary);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 32px;
		border: none;
		cursor: pointer;
		font-size: 16px;
		height: 56px;
		text-decoration: none;
		transition: opacity, 0s, ease-out, 0.3s;
		&:hover {
			opacity: 0.8;
		}
	}
</style>
