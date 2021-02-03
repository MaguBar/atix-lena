import React from 'react';

const FeatureItem = ({
    feature,
}) => {
    return (
        <div className="features__item_box" >
            <img src={feature.icon} alt={feature.title}></img>
            <h4>{feature.title}</h4>
            <p>{feature.text}</p>
        </div>

    )
}

export default FeatureItem