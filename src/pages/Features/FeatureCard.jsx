import React from 'react';
import InformationIcon from '../../assets/imgs/InformationIcon.png';
import FeatureCardItem from './FeatureCardItem';
import FeatureCardFooterItem from './FeatureCardFooterItem';
import FeatureCardHeader from './FeatureCardHeader';

const FeatureCard = () => {
    return (
        <div className="feature__card">
            
            <div className="feature__card_shadow"></div>

            <div className="feature__card_container">

                <FeatureCardHeader title="Degree Name" text="Bachelord Ingeneer" imgSrc={InformationIcon}  />

                <div className="feature__card_body">

                    <FeatureCardItem title="University Name" text="Free University Tbilisi" />
                    <FeatureCardItem title="Award" text="First Class Honours" />
                    <FeatureCardItem title="Full Name" text="Giorgi Beridze" />

                    <div className="feature__card_footer">
                        <FeatureCardFooterItem title="Start Date" text="03/01/2009" />
                        <FeatureCardFooterItem title="Graduation Date" text="03/01/2013" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FeatureCard