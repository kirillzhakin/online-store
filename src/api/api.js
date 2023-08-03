import axios from 'axios'

import config from '@/api/config'

export const HTTP = axios.create({
	baseURL: config.MOCK
})

const getProducts = async () => {
	try {
		const { data } = await HTTP.get('/products')
		return data
	} catch (error) {
		console.log(error)
	}
}

const getProduct = async id => {
	try {
		const { data } = await HTTP.get(`/products/${id}`)
		return data
	} catch (error) {
		console.log(error)
	}
}
export default { getProducts, getProduct }
