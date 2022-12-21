import { useContext } from 'react'
import CartContext from '../../store/cart-context'

import Modal from '../UI/Modal'
import Button from '../UI/Button'
import CartItem from './CartItem'

import classes from './Cart.module.css'

const Cart = props => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`
	const hasItems = cartCtx.items.length > 0

	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id)
	}

	const cartItemAddHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	)

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total:</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<Button className={classes['btn-alt']} onClick={props.onClose}>
					Close
				</Button>
				{hasItems && <Button>Order</Button>}
			</div>
		</Modal>
	)
}

export default Cart
