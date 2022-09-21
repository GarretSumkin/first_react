import React from 'react';
import "./Logo.scss"
import myLogo from "../img/myLogo.png";

const Logo = () => {
    const logo =  <img src={myLogo} className="App-logo" alt="logo" />;

    return (
        <div>
            {logo}
        </div>
    );
};

export default Logo;