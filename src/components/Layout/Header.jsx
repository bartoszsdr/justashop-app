import headerImg from '../../assets/img/header.jpg'

import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<img src={headerImg} alt='Kobieta niosąca torby z zakupami.' />
			<h1>
				Lorem
				<br />
				ipsum
				<br />
				dolor
				<br />
				sit amet.
			</h1>
		</header>
	)
}

export default Header
