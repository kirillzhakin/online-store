<template>
	<div class="container">
		<Header></Header>
		<Cover />
		<AboutBrand />
		<Products />
	</div>
</template>

<script setup>
	import Header from '@/components/layout/Header.vue'
	import Cover from '@/components/Cover.vue'
	import AboutBrand from '@/components/AboutBrand.vue'
	import Products from '@/components/Products.vue'
</script>
<style lang="scss">
	@import url('https://fonts.cdnfonts.com/css/satoshi');
	* {
		background-color: #defff4;
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: 'Satoshi, sans-serif';
		font-size: 16px;
		color: #22202e;
	}
	.container {
		max-width: 1440px;
		margin: auto;
	}
	.img {
		max-width: 100%;
	}
</style>
