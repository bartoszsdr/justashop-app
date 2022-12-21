import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

import Card from '../UI/Card'
import Button from '../UI/Button'

import classes from './AuthForm.module.css'

const AuthForm = props => {
	const [isLoading, setIsLoading] = useState(false)

	const authCtx = useContext(AuthContext)

	const navigate = useNavigate()

	const API_KEY = import.meta.env.VITE_FIREBASE_API

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		const enteredEmail = data.email
		const enteredPassword = data.password

		setIsLoading(true)

		fetch(API_KEY, {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				setIsLoading(false)
				if (res.ok) {
					return res.json()
				} else {
					res.json().then(data => {
						let errorMessage = 'Login error!'
						alert(errorMessage)
					})
				}
			})
			.then(data => {
				authCtx.login(data.idToken)
				navigate('/produkty')
			})
	}

	return (
		<>
			<h2 className={classes.heading}>👋 Hi! Please login to use the shop.</h2>
			<Card className={classes.card}>
				<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
					<input
						placeholder='Email'
						type='email'
						{...register('email', {
							required: true,
							minLength: {
								value: 4,
								message: 'Email must contain @ and > 4 characters.',
							},
						})}
					/>

					<p>{errors.email?.message}</p>

					<input
						placeholder='Password'
						type='password'
						{...register('password', {
							required: true,
							minLength: {
								value: 4,
								message: 'Password must contain > 6 characters.',
							},
						})}
					/>

					<p>{errors.password?.message}</p>

					{!isLoading && (
						<Button className={classes['form-btn']} type='submit'>
							Login
						</Button>
					)}
					{isLoading && <Button className={classes['form-btn']}>Loading...</Button>}
				</form>
			</Card>
		</>
	)
}

export default AuthForm
