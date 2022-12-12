import { useContext } from 'react'
import CartContext from '../../store/cart-context'

import { Link } from 'react-router-dom'

import Card from '../UI/Card'
import Button from '../UI/Button'
import StoreItemForm from './StoreItemForm'
import StoreDetail from './StoreDetail'

import classes from './StoreItem.module.css'

const StoreItem = props => {
	const cartCtx = useContext(CartContext)

	const price = `${props.price.toFixed(2)} PLN`

	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: props.id,
			title: props.title,
			amount: amount,
			price: props.price,
		})
	}

	return (
		<Card className={classes.card}>
			<div className={classes.image}>
				<img src={props.image} alt={props.title} />
			</div>
			<div className={classes['card-body']}>
				<h3>{props.title}</h3>
				<p>{price}</p>
			</div>
			<Link
				to={`/produkty/${props.id}`}
				element={<StoreDetail />}
				state={{
					title: props.title,
					price: props.price,
					description: props.description,
					image: props.image,
				}}>
				<Button className={classes['details-btn']}>Szczegóły</Button>
			</Link>
			<StoreItemForm id={props.id} onAddToCart={addToCartHandler} />
		</Card>
	)
}

export default StoreItem
