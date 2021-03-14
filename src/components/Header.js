import React from 'react';
import img from './logo.png';

const Header = () => {
    return(
    <>
        <div className='header'>
            <img className='headerLogo' src={img} alt="logo" />
            <h2>Google Keep</h2>
        </div>
    </>
    );
}

export default Header;