import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './store/auth-context'
import CartProvider from './store/CartProvider'

import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

import StoreDetail from './components/Store/StoreDetail'
import Wrapper from './components/Layout/Wrapper'
import Navigation from './components/Layout/Navigation'
import NavigationMobile from './components/Layout/NavigationMobile'
import Cart from './components/Cart/Cart'

function App() {
	const authCtx = useContext(AuthContext)

	const [cartIsShown, setCartIsShown] = useState(false)

	const showCartHandler = () => {
		setCartIsShown(true)
	}

	const hideCartHandler = () => {
		setCartIsShown(false)
	}

	return (
		<CartProvider>
			<Navigation onShowCart={showCartHandler} />
			<NavigationMobile onShowCart={showCartHandler} />
			<Wrapper>
				{cartIsShown && <Cart onClose={hideCartHandler} />}
				<Routes>
					<Route path='/' element={<Home />} />
					{!authCtx.isLoggedIn && <Route path='/products' element={<Login />} />}
					{authCtx.isLoggedIn && <Route path='/products' element={<Products />} />}
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Navigate to='/' />} />
					{authCtx.isLoggedIn && <Route path='/products/:productId' element={<StoreDetail />} />}
				</Routes>
			</Wrapper>
		</CartProvider>
	)
}

export default App
