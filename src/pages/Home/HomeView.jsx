import React from 'react';
import AppStore from '../../assets/imgs/AppStore.svg';
import GooglePlay from '../../assets/imgs/GooglePlay.svg';
import HomeImg from '../../assets/imgs/HomeImg.png';
import Header from '../../layout/Header';

const HomeView = () => {
    return (
        <main id="home" className="home">
            <Header />
            <section className="home__container">
                <aside className="home__text_aside">
                    <h3>Digital universities degrees powered by Blockchain</h3>
                    <p>Carry and share your credentials inside your digital wallet.</p>
                    <div className="home__download">
                        <img src={AppStore} alt="Apple Store download"></img>
                        <img src={GooglePlay} alt="Google Play download"></img>
                    </div>
                </aside>
                <aside className="home__img_aside">
                    <img src={HomeImg} alt="Mobile App representation"></img>
                </aside>
            </section>
        </main>
    )
}

export default HomeView