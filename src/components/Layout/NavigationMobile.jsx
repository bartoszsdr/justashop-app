import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

import Wrapper from './Wrapper'
import Button from '../UI/Button'
import CartButton from '../Cart/CartButton'

import { FaHome, FaShoppingBag, FaInfo, FaPhone } from 'react-icons/fa'
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io'

import classes from './NavigationMobile.module.css'

const Navigation = props => {
	const authCtx = useContext(AuthContext)

	const isLoggedIn = authCtx.isLoggedIn

	const navigate = useNavigate()

	const logoutHandler = () => {
		authCtx.logout()
		navigate('/logowanie')
	}

	return (
		<nav className={classes.navbar}>
			<Wrapper>
				<div className={classes['navbar-nav']}>
					<ul>
						<li>
							<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/'>
								<FaHome />
							</NavLink>
						</li>
						<li>
							<NavLink
								className={navData => (navData.isActive ? classes.active : '')}
								to={isLoggedIn ? '/produkty' : '/logowanie'}>
								<FaShoppingBag />
							</NavLink>
						</li>
						<li>
							<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/o-sklepie'>
								<FaInfo />
							</NavLink>
						</li>
						<li>
							<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/kontakt'>
								<FaPhone />
							</NavLink>
						</li>
						{!isLoggedIn && (
							<li className={classes['navbar-btn']}>
								<NavLink className={navData => (navData.isActive ? classes.active : '')} to='/logowanie'>
									<Button>
										<IoMdLogIn />
									</Button>
								</NavLink>
							</li>
						)}
						{isLoggedIn && (
							<li className={classes['navbar-btn']}>
								<Button onClick={logoutHandler}>
									<IoMdLogOut />
								</Button>
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
