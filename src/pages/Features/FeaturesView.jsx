import React from 'react';
import FeaturesIcon from '../../assets/imgs/FeaturesIcon.svg';
import CredentialsIcon from '../../assets/imgs/CredentialsIcon.svg';
import CryptoIcon from '../../assets/imgs/CryptoIcon.svg';
import WalletIcon from '../../assets/imgs/WalletIcon.svg';

import FeatureCard from './FeatureCard';
import FeatureItem from './FeatureItem';

const featuresArray = [
    {id: 1, icon: CredentialsIcon, title: 'Credentials', text: 'It is a long established fact that a reader will be distracted by the readable content of a page.'},
    {id: 2, icon: WalletIcon, title: 'Wallet', text: 'It is a long established fact that a reader will be distracted by the readable content of a page.'},
    {id: 3, icon: CryptoIcon, title: 'Crypto', text: 'It is a long established fact that a reader will be distracted by the readable content of a page.'},
]

const getFeatures = () => {
    const features = []

    featuresArray.map((feature,index) => {
        features.push(
            <FeatureItem feature={feature} key={index} />
        )
    })
    return features
}

const FeaturesView = () => {
    return (
        <main className="feature__container">
            <section id="features" className="feature">
                <section className="feature__main_section">
                    <h5>What is Atala Prism?</h5>
                    <p>Digital wallet and credentials verification platform. All in one.</p>
                    <div className="feature__section__aside">
                        {getFeatures()}
                    </div>
                </section>
                <section className="feature__section">
                    <div className="feature__section__card_aside">
                        <div className="feature__section__body">
                            <FeatureCard />
                            <div className="feature__section__button_box">
                                <button className="btn primary_btn_outline">Decline</button>
                                <button className="btn primary_btn">Confirm</button>
                            </div>
                        </div>
                    </div>

                    <div className="feature__section__text">
                        <img src={FeaturesIcon} alt="School cap icon"></img>
                        <h3>Lorem Ipsum is simply printing text.</h3>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default FeaturesView