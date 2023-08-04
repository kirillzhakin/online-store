<template>
	<div class="about-brand">
		<h3 class="about-brand__title">What makes our brand different</h3>
		<div class="about-brand-elements">
			<div class="about-brand-element" v-for="(element, i) of aboutBrands">
				<img :src="element.img" :alt="element.alt" :key="i" />
				<h4 class="about-brand-element__title">{{ element.title }}</h4>
				<span class="about-brand-element__description">{{
					element.description
				}}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	interface Brand {
		img: string
		title: string
		description: string
		alt: string
	}
	const aboutBrands: Brand[] = [
		{
			img: '/svg/about-brand-1.svg',
			title: 'Next day as standard',
			description:
				'Order before 3pm and get your order the next day as standard',
			alt: 'delivery'
		},
		{
			img: '/svg/about-brand-2.svg',
			title: 'Made by true artisans',
			description:
				'Handmade crafted goods made with real passion and craftmanship',
			alt: 'chekmark'
		},
		{
			img: '/svg/about-brand-3.svg',
			title: 'Unbeatable prices',
			description:
				'For our materials and quality you won’t find better prices anywhere',
			alt: 'purchase'
		},
		{
			img: '/svg/about-brand-4.svg',
			title: 'Recycled packaging',
			description:
				'We use 100% recycled to ensure our footprint is more manageable',
			alt: 'sprout'
		}
	]
</script>

<style lang="scss" scoped>
	.about-brand {
		padding: 80px 6% 130px 6%;
		@media screen and (max-width: 620px) {
			padding: 48px 0;
		}
		&__title {
			text-align: center;
			font-size: 24px;
			color: var(--primary);
			margin-bottom: 84px;
			font-weight: 400;
			@media screen and (max-width: 620px) {
				text-align: left;
				font-size: 20px;
				margin-bottom: 36px;
			}
		}
		&-elements {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			column-gap: 20px;
			justify-content: center;
			@media screen and (max-width: 1280px) {
				grid-template-columns: repeat(4, 1fr);
				gap: 20px;
			}
			@media screen and (max-width: 1024px) {
				grid-template-columns: repeat(2, 1fr);
				gap: 20px;
			}
			@media screen and (max-width: 620px) {
				grid-template-columns: 1fr;
				gap: 20px;
			}
		}
		&-element {
			color: var(--primary);
			background: var(--lightgray);
			padding: 48px;
			@media screen and (max-width: 620px) {
				padding: 36px 24px;
			}
			&-img {
				display: block;
				margin-bottom: 12px;
			}
			&-title {
				margin: 0 0 12px 0;
				font-size: 20px;
			}
			&__description {
				font-size: 16px;
				line-height: 1.5;
			}
		}
	}
</style>
