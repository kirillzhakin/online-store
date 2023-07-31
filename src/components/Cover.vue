<template>
	<div class="cover">
		<CoverInformation
			title="Luxury homeware for people who love timeless design quality"
			description="Shop the new Spring 2022 collection today"
			link="/"
		/>
	</div>
</template>

<script setup>
	import CoverInformation from '@/components/CoverInformation.vue'
</script>

<style lang="scss" scoped>
	.cover {
		display: flex;
		height: 704px;
		align-items: center;
		background: url('/img/cover.jpg');
		background-size: cover;
		justify-content: flex-end;
		padding-right: 6%;
		@media screen and (max-width: 620px) {
			padding: 0;
			height: auto;
			background: transparent;
		}
	}
</style>
