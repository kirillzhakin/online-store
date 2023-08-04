import axios from 'axios'

import config from '@/api/config'
import type { Product } from '@/types/product'

const HTTP = axios.create({
	baseURL: config.MOCK
})

export const getProducts = async (): Promise<Product[]> => {
	try {
		const { data }: { data: Product[] } = await HTTP.get('/products')
		return data
	} catch (error) {
		console.log(error)
		return []
	}
}

export const getProduct = async (id: number): Promise<Product | null> => {
	try {
		const { data }: { data: Product } = await HTTP.get(`/products/${id}`)
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}
