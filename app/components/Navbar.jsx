import React from 'react'
import { Link } from 'react-router'

const Navbar = (props) => {
	return (
		<div class="fixed top-0 left-0 right-0 p2 white bg-black">
			<div class="left">
				<span>Kool Kombucha Logo</span>
				<span>
			</div>
			<div class="right">
				<input 
					type="text"
					placeholder="search"/>
				<span>Cart</span>
				<span>Admin</span>
				<span>My Account</span>
			</div>
		</div>
	)
}