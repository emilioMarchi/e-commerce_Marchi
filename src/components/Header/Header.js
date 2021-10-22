import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Favorites</li>
                    <li>Contact</li>
                </ul>
                <Cart />
            </nav>
        </div>
    )
}

export default Header;