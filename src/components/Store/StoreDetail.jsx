import { Link, useLocation } from 'react-router-dom'

import Modal from '../UI/Modal'
import Button from '../UI/Button'

import classes from './StoreDetail.module.css'

const StoreDetail = () => {
	const location = useLocation()

	return (
		<Modal>
			<div className={classes.detail}>
				<h3 className={classes.title}>{location.state.title}</h3>
				<p className={classes.description}>{location.state.description}</p>
				<img src={location.state.image} alt='' />
				<p className={classes.price}>{location.state.price} €</p>
				<Link to='/products'>
					<Button className={classes['detail-btn']}>Close</Button>
				</Link>
			</div>
		</Modal>
	)
}

export default StoreDetail
