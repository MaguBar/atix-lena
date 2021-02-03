import React from 'react';
import DownloadItem from './DownloadItem';
import AppStore from '../../assets/imgs/AppStore.svg';
import GooglePlay from '../../assets/imgs/GooglePlay.svg';

const DownloadView = () => {
    return (
        <main className="download">
            <section className="download__container">
                <DownloadItem title="Trust 1" text="It is a long established fact that a reader will be distracted by the readable content of a page." />
                <DownloadItem id="download" title="Trust 2" text="It is a long established fact that a reader will be distracted by the readable content of a page." />
            </section>
            <section className="download__section">
                <h4>Lorem Ipsum is simply dummy text of the printing texto simulado.</h4>
                <div className="download__btn_box">
                    <img src={AppStore} alt="Apple Store download"></img>
                    <img src={GooglePlay} alt="Google Play download"></img>
                </div>
            </section>
            <div className="download__img" alt="Phone mockup showing Atala's app"></div>
        </main>
    )
}

export default DownloadView