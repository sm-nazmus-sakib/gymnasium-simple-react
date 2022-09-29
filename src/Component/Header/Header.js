import React from 'react';
import'./Header.css';

const Header = () => {
    return (
        <nav className="header mx-auto p-3 text-center">
            <h3>GYMNASIUM </h3>
            <a href="/home">Home</a>
            <a href="/tutorial">Tutorial</a>
            <a href="/about">About</a>
        </nav>
    )
};

export default Header;