<template>
	<div :class="['popup', { popup_opened: isOpen }]" @click="onOverlayClick">
		<div class="popup__container">
			<form
				class="popup__form"
				:name="name"
				novalidate
				@update:isError="onSubmit"
			>
				<h2 class="popup__title">{{ title }}</h2>
				<slot></slot>
				<input
					type="submit"
					name="submit"
					:value="buttonText"
					class="popup__button popup__button_type_save"
				/>
			</form>
			<button
				aria-label="Выход"
				type="button"
				class="popup__close-btn"
				@click="onClose"
			></button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { computed, onUnmounted } from 'vue'
	import { usePopupStore } from '@/stores/popup'
	const props = defineProps({
		name: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		buttonText: {
			type: String,
			required: true
		}
	})

	const popupStore = usePopupStore()

	const isOpen = computed(() => popupStore.getIsOpen)

	const onSubmit = () => {
		console.log('Submit')
	}
	const onClose = () => popupStore.setIsOpen(false)

	const onOverlayClick = (event: MouseEvent) => {
		if (event.target === event.currentTarget) onClose()
	}

	const onEscKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onClose()
		}
	}
	window.addEventListener('keydown', onEscKeyPress)

	onUnmounted(() => {
		window.removeEventListener('keydown', onEscKeyPress)
	})
</script>

<style lang="scss" scoped>
	.popup {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		justify-content: center;
		align-items: center;
		font-family: 'Inter', Verdana, Arial, Helvetica, sans-serif;
		visibility: hidden;
		opacity: 0;
		transition: visibility 0.7s, opacity 0.7s linear;
		&_opened {
			display: flex;
			visibility: visible;
			opacity: 1;
		}
		&__container {
			max-width: 430px;
			width: 100%;
			box-sizing: border-box;
			border-radius: 10px;
			background-color: #ffffff;
			box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
			position: relative;
			padding: 34px 36px 37px 36px;
			@media screen and (max-width: 768px) {
				width: 88.125%;
			}
			@media screen and (max-width: 430px) {
				padding: 25px 22px 25px 22px;
			}
		}
		&__form {
			display: flex;
			flex-direction: column;
		}
		&__title {
			font-weight: 900;
			font-size: 24px;
			line-height: 29px;
			color: var(--primary);
			margin: 0 0 38px 0;
			@media screen and (max-width: 430px) {
				font-size: 18px;
				line-height: 22px;
				margin: 0 0 60px 0;
			}
		}
		&__button {
			margin: 28px 0 0 0;
			padding: 0;
			background: #2a254b;
			border-radius: 2px;
			border: none;
			min-height: 50px;
			font-weight: normal;
			font-size: 18px;
			line-height: 22px;
			text-align: center;
			color: #ffffff;
			cursor: pointer;
			&__button:hover {
				opacity: 0.8;
				transition: opacity, 0s, ease-out, 0.5s;
			}
			@media screen and (max-width: 430px) {
				font-size: 14px;
				line-height: 17px;
				margin: 25px 0 0 0;
			}
		}
		&__close-btn {
			position: absolute;
			background-image: url('/public/svg/close-icon.svg');
			background-size: cover;
			background-color: rgba(0, 0, 0, 0);
			border: none;
			width: 32px;
			height: 32px;
			top: -40px;
			right: -40px;
			cursor: pointer;
			@media screen and (max-width: 550px) {
				top: -36px;
				width: 20px;
				height: 20px;
				right: 0;
			}
			&__close-btn:hover {
				opacity: 0.6;
				transition: opacity, 0s, ease-out, 0.5s;
			}
		}
	}
</style>
