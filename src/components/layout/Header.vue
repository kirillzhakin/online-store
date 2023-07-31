<template>
	<header class="header">
		<div class="header-top">
			<div class="header-top-search">
				<img src="/svg/header-search.svg" alt="search" />
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
	</header>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
	.header {
		height: 132px;
		background: #fff;
		&-top {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			height: 70px;
			align-items: center;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			margin: 0 28px;
			&-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
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
			&:hover {
				text-decoration: underline;
			}
		}
		&-menu {
			height: 62px;
			display: flex;
			justify-content: center;
			align-items: center;
			&__link {
				margin: 0 22px;
				color: var(--gray);
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
