import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
const header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo"/>
            <nav className='nav'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/reviews">Review</a>
                <a href="/manage">Manage</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default header;