import React from 'react';
import './navbar.styles.css';

function Navbar() {
    return (
        <div className='navbar-container'>
            <div>
                <h1>My Contacts</h1>
            </div>
            <div className='navbar-div'>
            {/* TODO: add icons after each item */}
                <ul>
                    <li>Portfolio</li>
                    <li>GitHub</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;