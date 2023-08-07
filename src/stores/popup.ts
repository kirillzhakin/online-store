import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popupStore', () => {
	const isOpen = ref<boolean>(false)

	const getIsOpen = computed(() => isOpen.value)

	const setIsOpen = (value: boolean) => {
		isOpen.value = value
	}

	return {
		getIsOpen,
		setIsOpen
	}
})
