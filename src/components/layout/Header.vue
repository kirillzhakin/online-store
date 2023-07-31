<template>
	<header class="header">
		<div class="header-top">
			<div class="header-top-left">
				<div class="header-top-search">
					<img src="/svg/header-search.svg" alt="search" />
				</div>
				<div
					class="header-top-mobile-menu"
					@click="isOpenedMobileMenu = !isOpenedMobileMenu"
				>
					<img src="/svg/menu.svg" alt="menu" />
				</div>
			</div>

			<router-link to="/" class="header-logo">Avion</router-link>
			<div class="header-top-right">
				<div class="header-top-right__cart">
					<router-link to="/basket">
						<img src="/svg/header-cart.svg" alt="basket" />
					</router-link>
				</div>
				<div class="header-top-right__profile">
					<router-link to="/profile">
						<img src="/svg/header-profile.svg" alt="profile" />
					</router-link>
				</div>
			</div>
		</div>

		<div class="header-menu">
			<router-link
				:to="element.path"
				v-for="(element, i) of menu"
				:key="i"
				class="header-menu__link"
				>{{ element.name }}</router-link
			>
		</div>
		<div class="header-menu-mobile" v-if="isOpenedMobileMenu">
			<router-link
				:to="element.path"
				v-for="(element, i) of menu"
				:key="i"
				class="header-menu__link"
				>{{ element.name }}</router-link
			>
		</div>
	</header>
</template>

<script setup>
	import { ref } from 'vue'
	const menu = [
		{
			name: 'Plant post',
			path: '/plant'
		},
		{
			name: 'Ceramics',
			path: '/ceramics'
		},
		{
			name: 'Tables',
			path: '/tables'
		}
	]

	const isOpenedMobileMenu = ref(false)
</script>

<style lang="scss" scoped>
	.header {
		height: 132px;
		position: relative;
		@media screen and (max-width: 620px) {
			height: 69px;
			padding: 20px 0;
		}
		&-top {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			height: 70px;
			align-items: center;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			margin: 0 28px;
			@media screen and (max-width: 620px) {
				margin: 0;
				border: none;
				height: auto;
				padding: 20px 0;
				display: flex;
				justify-content: space-between;
			}
			&-left {
				display: flex;
				align-items: center;
				@media screen and (max-width: 620px) {
					order: 2;
				}
			}
			&-search {
				@media screen and (max-width: 620px) {
					margin-right: 16px;
				}
			}
			&-mobile-menu {
				display: none;
				@media screen and (max-width: 620px) {
					display: block;
					cursor: pointer;
				}
			}
			&-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				@media screen and (max-width: 620px) {
					display: none;
				}
				&__cart {
					margin-right: 16px;
				}
			}
		}
		&-logo {
			font-family: var(--satoshi);
			font-size: 24px;
			text-decoration: none;
			color: #22202e;
			text-align: center;
			@media screen and (max-width: 620px) {
				order: 1;
			}
			&:hover {
				text-decoration: underline;
			}
		}
		&-menu {
			height: 62px;
			display: flex;
			justify-content: center;
			align-items: center;
			@media screen and (max-width: 620px) {
				display: none;
				height: 0;
			}
			&__link {
				margin: 0 22px;
				color: var(--gray);
				text-decoration: none;
				@media screen and (max-width: 620px) {
					display: block;
					margin-bottom: 20px;
				}
				&:hover {
					text-decoration: underline;
				}
			}
			&-mobile {
				position: absolute;
				background: #fff;
				width: 100%;
				top: 100px;
				border: 1px solid;
				padding: 40px 24px;
			}
		}
	}
</style>
