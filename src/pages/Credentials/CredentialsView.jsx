import React from 'react';
import VectorarrowIcon from '../../assets/imgs/VectorarrowIcon.svg';
import CredentialsCardImg from '../../assets/imgs/CredentialsCardImg.svg';
import VectorwhitearrowIcon from '../../assets/imgs/VectorwhitearrowIcon.svg';

const CredentialsView = () => {
    return (
        <main id="credentials" className="credentials">
            <section className="credentials__container">
                <div className="credentials__title_box">
                    <h4>Find a Credential</h4>
                    <img src={VectorarrowIcon} alt="Arrow icon"></img>
                </div>

                <aside className="credentials__card">
                    <img src={CredentialsCardImg} alt="Happy person"></img>
                    <div className="credentials__body">
                        <div className="credentials__body__btn">Credential ID</div>
                        <h4>Credential Name</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <span>You will be ask for some personal data</span>

                        <button>
                            Ask for Credential
                            <img src={VectorwhitearrowIcon} alt="White arrow icon"></img>
                        </button>
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default CredentialsView