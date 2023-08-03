<template>
	<div class="slider">
		<img :src="image" alt="image" class="slider-img" />
		<div class="slider-block">
			<button @click="prevSlide" class="slider-btn">
				<img
					src="/svg/left.svg"
					alt="left"
					:style="{ opacity: currentSliderIndex === 0 ? 0.5 : 1 }"
				/>
			</button>
			<button
				@click="nextSlide"
				class="slider-btn"
				:style="{ opacity: currentSliderIndex === slider.length - 1 ? 0.5 : 1 }"
			>
				<img src="/svg/right.svg" alt="right" />
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, toRef, reactive, onMounted } from 'vue'

	const props = defineProps({
		slider: {
			type: Array,
			default: () => [],
			required: false
		}
	})
	const image = ref('')
	const currentSliderIndex = ref(0)
	const propSlider = reactive({ slider: toRef(props, 'slider') })

	const prevSlide = () => {
		if (currentSliderIndex.value > 0) {
			currentSliderIndex.value--
			image.value = propSlider.slider[currentSliderIndex.value].img
		}
	}
	const nextSlide = () => {
		if (currentSliderIndex.value >= propSlider.slider.length - 1) return
		currentSliderIndex.value++
		image.value = propSlider.slider[currentSliderIndex.value].img
	}

	onMounted(() => {
		image.value = propSlider.slider[currentSliderIndex.value].img
	})
</script>

<style lang="scss">
	.slider {
		display: flex;
		flex-direction: column;
		&-img {
			min-height: 500px;
			width: 100%;
			margin-bottom: 28px;
			object-fit: cover;
		}
		&-block {
			padding: 0 24px;
		}
		&-btn {
			width: 24px;
			height: 24px;
			border: none;
			background: none;
			cursor: pointer;
			padding: 0;
			outline: none;
			margin: 0 10px 0 0;
			transition: opacity, 0s, ease-out, 0.6s;
			&:hover {
				opacity: 0.5;
			}
		}
	}
</style>
