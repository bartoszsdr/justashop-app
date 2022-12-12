import { useState, useEffect } from 'react'

import StoreList from '../components/Store/StoreList'
import Loading from '../components/UI/Loading'

const ProductsPage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedProducts, setLoadedProducts] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch('https://fakestoreapi.com/products?limit=12')
			.then(response => {
				return response.json()
			})
			.then(data => {
				const products = []

				for (const key in data) {
					const product = {
						id: key,
						...data[key],
					}
					products.push(product)
				}

				setIsLoading(false)
				setLoadedProducts(products)
			})
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<section>
			<h2 style={{ marginTop: 45, textAlign: 'center', fontSize: 20 }}>Życzymy udanych zakupów! 🤗</h2>
			<StoreList products={loadedProducts} />
		</section>
	)
}

export default ProductsPage
