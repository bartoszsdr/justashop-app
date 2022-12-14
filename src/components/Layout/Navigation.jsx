import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

import Wrapper from './Wrapper'
import Button from '../UI/Button'
import CartButton from '../Cart/CartButton'
import logo from '../../assets/img/logo.svg'

import classes from './Navigation.module.css'

const Navigation = props => {
	const authCtx = useContext(AuthContext)

	const isLoggedIn = authCtx.isLoggedIn

	const navigate = useNavigate()

	const logoutHandler = () => {
		authCtx.logout()
		navigate('/login')
	}

	return (
		<nav className={classes.navbar}>
			<Wrapper>
				<div className={classes['navbar-nav']}>
					<div>
						<NavLink to='/'>
							<img src={logo} alt='Logo' className={classes['navbar-logo']} />
						</NavLink>
					</div>
					<ul>
						<li>
							<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/'>
								Home
							</NavLink>
						</li>
						{isLoggedIn && (
							<li>
								<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/products'>
									Products
								</NavLink>
							</li>
						)}
						{!isLoggedIn && (
							<li>
								<NavLink to='/login'>Products</NavLink>
							</li>
						)}
						<li>
							<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/contact'>
								Contact
							</NavLink>
						</li>
						{!isLoggedIn && (
							<li className={classes['navbar-btn']}>
								<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/login'>
									<Button>Login</Button>
								</NavLink>
							</li>
						)}
						{isLoggedIn && (
							<li className={classes['navbar-btn']}>
								<Button onClick={logoutHandler}>Logout</Button>
							</li>
						)}
						{isLoggedIn && (
							<li>
								<CartButton onClick={props.onShowCart} />
							</li>
						)}
					</ul>
				</div>
			</Wrapper>
		</nav>
	)
}

export default Navigation
