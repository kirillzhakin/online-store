<template>
	<button
		v-if="type === 'button'"
		class="button"
		:style="{ background, color, padding, height }"
	>
		<slot></slot>
	</button>
	<router-link
		v-else
		:to="to"
		class="button"
		:style="{ background, color, padding, height }"
	>
		<slot></slot>
	</router-link>
</template>

<script lang="ts" setup>
	const props = defineProps({
		color: {
			type: String,
			requred: false
		},
		background: {
			type: String,
			requred: false
		},
		padding: {
			type: String,
			requred: false
		},
		height: {
			type: String,
			default: '56px',
			requred: false
		},
		type: {
			type: String,
			default: 'button'
		},
		to: {
			type: String,
			default: '/',
			requred: false
		}
	})
</script>

<style lang="scss" scoped>
	.button {
		background: #fff;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 32px;
		border: none;
		cursor: pointer;
		font-size: 16px;
		text-decoration: none;
		transition: opacity, 0s, ease-out, 0.3s;
		@media screen and (max-width: 620px) {
			width: 100%;
		}
		&:hover {
			opacity: 0.5;
		}
	}
</style>
