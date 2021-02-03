import React, { useState } from 'react';
import AtalaLogo from '../assets/imgs/AtalaLogo.png';
import MenuIcon from '../assets/imgs/MenuIcon.svg';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="header">
                <div className="header__nav_container">
                    <div className="header__nav">
                        <div className="header__logo"><img src={AtalaLogo} alt="Atala logo"></img></div>
                        <div className="header__burger_menu" onClick={toggleShowMenu}>
                            <img src={MenuIcon} alt="Menu logo"></img>
                        </div>
                    </div>

                    {showMenu && <div className="header__mobile_menu">
                        <a href="#features">Features</a>
                        <a href="#credentials">Credentials</a>
                        <a href="#download">Download</a>
                    </div>}

                    <div className="header__desktop_menu">
                        <a href="#features">Features</a>
                        <a href="#credentials">Credentials</a>
                        <a href="#download">Download</a>
                    </div>
                </div>
        </div>
    )
}

export default Header