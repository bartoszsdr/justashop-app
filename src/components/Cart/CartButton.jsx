import { useContext } from 'react'
import CartContext from '../../store/cart-context'

import { FaShoppingCart } from 'react-icons/fa'

import classes from './CartButton.module.css'

const CartButton = props => {
	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<FaShoppingCart />
			</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default CartButton
