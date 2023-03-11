import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxAvatar} from 'react-icons/rx'

const Header = () => {
  return (
    <div className='Navbar'>
        <div className="name-menu">
            <GiHamburgerMenu cursor='pointer'/>
            <Link to ='./' className='logo-menu'>JUmie</Link>
        </div>
        <div className="search-bar">
            <input type="text" placeholder='Search products, brands and categories' />
            <button>Search</button>
        </div>
        <div className="account_cart-menu">
            <div className="profile-account">
                <Link to ='./User.js' className='user-link'><RxAvatar cursor='pointer' fontSize='20px'/>Account</Link>               
            </div>
            <div className="navbar-key">
                <Link to ='./Cart.js'><BsCart4 fontSize='20px'  className='cart-link'/></Link>
                <span>3</span>
            </div>
        </div>
        
    </div>
  )
}

export default Header