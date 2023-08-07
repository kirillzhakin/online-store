<template>
	<div class="pay">
		<div class="pay-container">
			<h3 class="pay-title">TOTAL SCORE:</h3>
			<span class="pay-score"> {{ cartStore.cartTotalScore }} $ </span>
		</div>
		<div class="pay-inputs">
			<Input
				label="Your name"
				id="name"
				placeholder="IVAN IVANOV"
				maxlength="30"
				v-model="name"
				:error="nameError"
				@update:modelValue="validateName"
			/>

			<Input
				label="Card Number"
				type="tel"
				id="number"
				placeholder="•••• •••• •••• ••••"
				maxlength="19"
				v-model="cardNumber"
				:error="cardNumberError"
				@update:model-value="validateCardNumber"
			/>
			<Input
				label="Card Expiry (MM/YYYY)"
				type="tel"
				id="date"
				placeholder="•• / ••••"
				maxlength="7"
				v-model="expiryDate"
				:error="expiryDateError"
				@update:model-value="validateExpiryDate"
			/>
			<Input
				label="CVC"
				type="password"
				id="cvc"
				placeholder="•••"
				maxlength="3"
				v-model="cvc"
				:error="cvcError"
				@update:model-value="validateCVC"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, watch } from 'vue'
	import Input from '@/components/UI/Input.vue'
	import { useCartStore } from '@/stores/cart'
	const emit = defineEmits(['update:isError'])

	const isError = ref<boolean>(false)
	const cartStore = useCartStore()

	const name = ref('')
	const cardNumber = ref('')
	const expiryDate = ref('')
	const cvc = ref('')

	const nameError = ref('')
	const cardNumberError = ref('')
	const expiryDateError = ref('')
	const cvcError = ref('')

	const validateName = (newValue: string) => {
		// Проверяем, чтобы поле не было пустым
		if (!newValue.trim()) {
			nameError.value = 'Введите ваше имя'
			return false
		}

		// Проверяем, чтобы поле содержало только латинские буквы
		const regex = /^[a-zA-Z\s]+$/
		if (!regex.test(newValue)) {
			nameError.value = 'Имя должно содержать только латинские буквы'
			return false
		}

		// Переводим имя в верхний регистр
		const upperCaseName = newValue.toUpperCase()
		nameError.value = ''
		name.value = upperCaseName
		return true
	}

	const formatCardNumber = (cardNumber: string) => {
		const cleanedCardNumber = cardNumber.replace(/\s/g, '')
		let formattedCardNumber = cleanedCardNumber.replace(/(\d{4})/g, '$1 ')

		// Удаляем лишний пробел в конце, если он есть
		if (formattedCardNumber.endsWith(' ')) {
			formattedCardNumber = formattedCardNumber.slice(0, -1)
		}

		return formattedCardNumber
	}

	const validateCardNumber = (newValue: string) => {
		// Форматируем номер карты
		const formattedValue = formatCardNumber(newValue)

		// Присваиваем отформатированное значение обратно в поле ввода
		cardNumber.value = formattedValue

		// Удаляем все пробелы из значения
		const cleanedValue = formattedValue.replace(/\s/g, '')

		// Проверяем, чтобы поле не было пустым
		cardNumberError.value = cleanedValue ? '' : 'Введите номер карты'

		// Проверяем, чтобы поле содержало только цифры
		if (cleanedValue && !/^\d+$/.test(cleanedValue)) {
			cardNumberError.value = 'Номер карты должен содержать только цифры'
			return false
		}

		// Проверяем, чтобы поле содержало 16 цифр
		if (cleanedValue && cleanedValue.length !== 16) {
			cardNumberError.value = 'Номер карты должен содержать 16 цифр'
			return false
		}

		cardNumberError.value = ''
		return true
	}

	const validateExpiryDate = (newValue: string) => {
		// Удаляем все пробелы из значения и добавляем косую черту после второй цифры
		const cleanedValue = newValue.replace(/\s/g, '').replace(/^(\d{2})/, '$1/')

		// Проверяем, чтобы поле не было пустым
		expiryDateError.value = cleanedValue ? '' : 'Введите срок действия карты'

		// Проверяем, чтобы поле содержало только цифры и /
		if (cleanedValue && !/^\d{2}\/\d{4}$/.test(cleanedValue)) {
			expiryDateError.value =
				'Срок действия карты должен быть в формате MM/YYYY'
			return false
		}

		// При наборе 2-х цифр, если поле пустое или содержит только одну цифру, не обновляем значение поля
		if (
			cleanedValue.length === 2 &&
			(newValue === '' || !/^\d{2}$/.test(newValue))
		) {
			return true
		}

		// Обновляем значение поля в нужном формате
		expiryDate.value = cleanedValue
		return true
	}

	const validateCVC = (newValue: string) => {
		// Проверяем, чтобы поле не было пустым
		const cleanedValue = newValue.replace(/\s/g, '')
		if (cleanedValue) {
			cvcError.value = ''
		} else {
			cvcError.value = 'Введите CVC-код'
			return false
		}

		// Проверяем, чтобы поле содержало только цифры
		if (cleanedValue && !/^\d+$/.test(cleanedValue)) {
			cvcError.value = 'CVC-код должен содержать только цифры'
			return false
		}

		// Проверяем, чтобы поле содержало 3 цифры
		if (cleanedValue && cleanedValue.length !== 3) {
			cvcError.value = 'CVC-код должен содержать 3 цифры'
			return false
		}
		return true
	}
</script>

<style lang="scss" scoped>
	.pay {
		display: flex;
		flex-direction: column;
		&-container {
			display: flex;
			justify-content: space-between;
			margin-bottom: 15px;
		}
		&-title {
			margin: 0;
			display: flex;
			align-items: center;
			text-align: center;
			color: var(--primary);
		}
		&-score {
			display: flex;
			align-items: center;
			text-align: center;
			color: var(--primary);
			font-size: 18px;
		}
		&-inputs {
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>
