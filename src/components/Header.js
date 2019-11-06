import React from 'react';

const Header = props => {
    // console.log(props);
    return (
        <header>
            <img className='nasaLogo' alt="logo for NASA" src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png'/>
            <h1>Space Stuff</h1>
            <h2>{props.date}</h2>
        </header>
    )
}

export default Header;