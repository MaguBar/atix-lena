import React from 'react';
import AtalaLogo from '../assets/imgs/AtalaLogo.png'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__img">
                <img src={AtalaLogo} alt="Atix logo"></img>
            </div>
            <p className="footer__text">
            © Copyright 2019, ATALA. All Rights Reserved. ATALA Prism is a registered trademarke of IOHK.
            </p>
        </section>
    )
}

export default Footer