import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h2>
                    React Cafe
                </h2>
            </div>
            <div className="navbar">
                <div className='menu'>
                    <a href="">Home</a>
                    <a href="">Latest</a>
                    <a href="">Featured</a>
                </div>
                <div className='user-avator'>
                    <img width="50" className='' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;