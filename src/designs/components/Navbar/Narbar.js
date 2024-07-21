import React from 'react';
import Image from '../../img/argentBankLogo.png'
import './Navbar.css'

function Narbar() {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img className="main-nav-logo-image" src={Image} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            
            <div>
                <a className="main-nav-item" href="./sign_in">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    );
}

export default Narbar;