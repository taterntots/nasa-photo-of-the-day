import React from 'react';
import Logo from '../assets/nasa-logo.png';

const Header = props => {
    // console.log(props);
    return (
        <header>
            <img className='nasaLogo' alt="logo for NASA" src={Logo}/>
            <h1>Space Stuff</h1>
            <h2>{props.date}</h2>
        </header>
    )
}

export default Header;