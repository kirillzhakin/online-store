<template>
	<div class="text-field">
		<label>{{ label }}</label>
		<div class="text-field__container">
			<input
				:type="type"
				:id="id"
				:placeholder="placeholder"
				:value="modelValue"
				@input="handleChange"
				:style="{ padding, height }"
				:maxlength="maxlength"
				class="text-field__input"
			/>
			<span :id="error" class="error error_type_visible">{{ error }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const emit = defineEmits(['update:modelValue'])
	const props = defineProps({
		type: {
			type: String,
			default: 'text',
			required: false
		},
		id: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		},
		label: {
			type: String,
			required: false
		},
		padding: {
			type: String,
			default: '0.5rem 0.6rem',
			required: false
		},
		height: {
			type: String,
			default: '40px',
			required: false
		},
		error: {
			type: String,
			required: false
		},
		modelValue: {
			type: String,
			required: true
		},
		maxlength: {
			type: String,
			required: true
		}
	})

	const handleChange = (event: Event) => {
		const newValue: string = (event.target as HTMLInputElement).value
		emit('update:modelValue', newValue)
	}
</script>

<style lang="scss" scoped>
	.text-field {
		&__container {
			display: flex;
			flex-direction: column;
			height: 60px;
		}
		&__input {
			display: block;
			width: 100%;
			font-family: inherit;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			color: #212529;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 0.25rem;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}
		&__input::placeholder {
			color: #212529;
			opacity: 0.4;
			font-size: 16px;
		}
		&__input:focus {
			color: #212529;
			background-color: #fff;
			border-color: #bdbdbd;
			outline: 0;
			box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
		}
		&__input:disabled,
		&__input[readonly] {
			background-color: #f5f5f5;
			opacity: 1;
		}
	}

	.error {
		display: none;
		font-weight: normal;
		font-size: 12px;
		line-height: 15px;
		color: #ff0000;
		margin: 5px 0 0 0;
		&_type_visible {
			display: block;
		}
	}
</style>
