import StoreItem from './StoreItem'

import classes from './StoreList.module.css'

const StoreList = props => {
	return (
		<ul className={classes.products}>
			{props.products.map(product => (
				<StoreItem
					key={product.id}
					id={product.id}
					title={product.title}
					price={product.price}
					category={product.category}
					description={product.description}
					image={product.image}
				/>
			))}
		</ul>
	)
}

export default StoreList
