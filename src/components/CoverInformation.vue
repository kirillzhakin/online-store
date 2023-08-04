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
		<img class="cover-info__image" src="/img/cover.jpg" alt="cover" />
	</div>
</template>

<script lang="ts" setup>
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
		@media screen and (max-width: 620px) {
			padding: 47px 0 32px 0;
			min-height: 0;
			height: auto;
		}
		&-text {
			@media screen and (max-width: 620px) {
				margin-bottom: 32px;
			}
		}
		&__title {
			font-family: var(--inter);
			font-weight: 400;
			line-height: 1.5;
			margin: 0 0 20px 0;
		}
		&__description {
			font-size: 18px;
		}
		&__image {
			display: none;
			@media screen and (max-width: 620px) {
				display: block;
				margin-top: 32px;
			}
		}
	}
</style>
