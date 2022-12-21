import { useState, useRef } from 'react'

import Input from '../UI/Input'
import Button from '../UI/Button'

import classes from './StoreItemForm.module.css'

const StoreItemForm = props => {
	const [amountIsValid, setAmountIsValid] = useState(true)

	const amountInputRef = useRef()

	const submitHandler = e => {
		e.preventDefault()

		const enteredAmount = amountInputRef.current.value
		const enteredAmountNumber = +enteredAmount

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false)
			return
		}
		props.onAddToCart(enteredAmountNumber)
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				className={classes.input}
				label='Quantity'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<Button type='submit' className={classes.button}>
				ADD +
			</Button>
			{!amountIsValid && <p>Insert a valid amount.</p>}
		</form>
	)
}

export default StoreItemForm
