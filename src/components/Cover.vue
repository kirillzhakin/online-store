<template>
	<div class="cover">
		<div class="cover-info">
			<div class="cover-info-text">
				<h2 class="cover-info__title">
					Luxury homeware for people who love timeless design quality
				</h2>
				<span class="cover-info__description"
					>Shop the new Spring 2022 collection today</span
				>
			</div>
			<a href="#" class="cover-info-link">View collection</a>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.cover {
		display: flex;
		height: 704px;
		align-items: center;
		background: url('/img/cover.jpg');
		background-size: cover;
		justify-content: flex-end;
		padding-right: 80px;
		&-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background: #fff;
			max-width: 630px;
			padding: 50px 55px;
			height: 444px;
			&__title {
				font-family: 'Clash Display', sans-serif;
				font-weight: 400;
				line-height: 1.5;
				margin: 0 0 20px 0;
			}
			&__description {
				color: #5b5676;
				font-size: 18px;
			}
			&-link {
				color: #2a254b;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
