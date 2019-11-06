import React from 'react';

const Header = props => {
    return (
        <header>
            <img className='nasaLogo' alt="logo for NASA" src='../assets/nasa-logo.png'/>
            <h1>Space Stuff</h1>
            <h2>{props.date}</h2>
        </header>
    )
}

export default Header;