<template>
	<header class="header">
		<div class="header-top">
			<div class="header-top-left">
				<div class="header-top-search">
					<img src="/svg/header-search.svg" alt="search" />
				</div>
				<div
					class="header-top-mobile-menu"
					@click="isOpenedMobileFilters = !isOpenedMobileFilters"
				>
					<img src="/svg/menu.svg" alt="menu" />
				</div>
			</div>

			<router-link to="/" class="header-logo">Online Shop</router-link>
			<div class="header-top-right">
				<div class="header-top-right__cart">
					<router-link to="/cart">
						<img src="/svg/header-cart.svg" alt="cart" />
						<span class="header-top-right__count" v-if="cartStore.cartLength">{{
							cartStore.cartLength
						}}</span>
					</router-link>
				</div>
				<div class="header-top-right__profile">
					<router-link to="/profile">
						<img src="/svg/header-profile.svg" alt="profile" />
					</router-link>
				</div>
			</div>
		</div>

		<ui class="header-filters">
			<li
				v-for="category of uniqueCategory"
				:key="category"
				class="header-filters__btn"
			>
				<Button
					color="var(--primary)"
					padding="0"
					@click="selectValue(category)"
				>
					{{ category }}
				</Button>
			</li>
		</ui>
		<transition name="slide-fade">
			<div class="header-filters-mobile" v-if="isOpenedMobileFilters">
				<ui>
					<li
						v-for="category of uniqueCategory"
						:key="category"
						class="header-filters__btn"
					>
						<Button color="var(--primary)" @click="selectValue(category)">
							{{ category }}
						</Button>
					</li>
				</ui>
				<div class="header-top-right header-top-right-mobile">
					<div class="header-top-right__cart">
						<router-link to="/cart">
							<img src="/svg/header-cart.svg" alt="cart" />
							<span
								class="header-top-right__count"
								v-if="cartStore.cartLength"
								>{{ cartStore.cartLength }}</span
							>
						</router-link>
					</div>
					<div class="header-top-right__profile">
						<router-link to="/profile">
							<img src="/svg/header-profile.svg" alt="profile" />
						</router-link>
					</div>
				</div>
			</div>
		</transition>
	</header>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue'
	import { useProductsStore } from '@/stores/products'
	import type { ComputedRef } from 'vue'
	import { useCartStore } from '@/stores/cart'
	import { useUserStore } from '@/stores/user'
	import Button from '@/components/UI/Button.vue'

	const userStore = useUserStore()

	const selectValue = (category: string): void => {
		if (category === 'all products') return userStore.allProducts()
		userStore.addSelectedProducts([category])
	}

	const isOpenedMobileFilters = ref(false)
	const cartStore = useCartStore()
	const productsStore = useProductsStore()

	const uniqueCategory: ComputedRef<string[]> = computed(
		() => productsStore.uniqueCategory
	)
</script>

<style lang="scss" scoped>
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}

	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-enter,
	.slide-fade-leave-active {
		padding-left: 10px;
		opacity: 0;
	}

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
					height: 32px;
				}
			}
			&-search {
				@media screen and (max-width: 620px) {
					margin-right: 16px;
					height: 100%;
				}
			}
			&-mobile-menu {
				display: none;
				@media screen and (max-width: 620px) {
					display: block;
					cursor: pointer;
					height: 100%;
				}
			}
			&-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				@media screen and (max-width: 620px) {
					display: none;
				}
				&-mobile {
					display: flex;
					justify-content: center;
					height: 32px;
				}
				&__cart {
					margin-right: 16px;
					position: relative;
					height: 100%;
					transition: opacity, 0s, ease-out, 0.6s;
					&:hover {
						opacity: 0.5;
					}
				}
				&__count {
					position: absolute;
					width: 15px;
					height: 15px;
					background: #9b9898;
					border-radius: 50%;
					color: #fff;
					font-size: 10px;
					text-decoration: none;
					display: flex;
					justify-content: center;
					align-items: center;
					left: -50%;
					bottom: 0;
				}
				&__profile {
					transition: opacity, 0s, ease-out, 0.6s;
					&:hover {
						opacity: 0.5;
					}
					@media screen and (max-width: 620px) {
						height: 100%;
					}
				}
			}
		}
		&-logo {
			font-family: var(--inter);
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
		&-filters {
			height: 62px;
			display: flex;
			justify-content: center;
			align-items: center;
			@media screen and (max-width: 620px) {
				display: none;
				height: 0;
			}
			&__btn {
				margin: 0 22px;
				color: var(--gray);
				list-style-type: none;

				@media screen and (max-width: 620px) {
					display: block;
					margin: 0 0 20px 0;
				}
			}
			&-mobile {
				display: none;
				@media screen and (max-width: 620px) {
					display: block;
					position: absolute;
					background: #fff;
					width: 100%;
					top: 100px;
					border: 1px solid;
					padding: 40px 24px;
				}
			}
		}
	}
</style>
