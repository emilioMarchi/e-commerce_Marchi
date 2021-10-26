import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart';

import { Link } from 'react-router-dom';



const Header = () => {
 
    return (
        <div className='header'>
            <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/favorites'>Favorites</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
                <Cart />
            </nav>
        </div>
    )
}

export default Header;