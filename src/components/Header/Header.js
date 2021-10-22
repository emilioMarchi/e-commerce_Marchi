import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Favorites</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;