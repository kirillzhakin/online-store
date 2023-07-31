<template>
	<div class="cover-info">
		<div class="cover-info-text">
			<h2 class="cover-info__title">
				{{ title }}
			</h2>
			<span class="cover-info__description">{{ description }}</span>
		</div>
		<div class="cover-info-link">
			<ui-button background="#F9F9F9" type="link" to="/"
				>View collection</ui-button
			>
		</div>
	</div>
</template>

<script setup>
	import uiButton from '@/components/UI/Button.vue'

	const props = defineProps({
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		link: {
			type: String,
			required: false
		}
	})
</script>

<style lang="scss" scoped>
	.cover-info {
		display: flex;
		flex-direction: column;
		background: #fff;
		justify-content: space-between;
		max-width: 630px;
		padding: 50px 55px;
		height: 444px;
		&__title {
			font-family: var(--satoshi);
			font-weight: 400;
			line-height: 1.5;
			margin: 0 0 20px 0;
		}
		&__description {
			font-size: 18px;
		}
	}
</style>
