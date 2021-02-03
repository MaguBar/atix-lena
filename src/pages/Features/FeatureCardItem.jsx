import React from 'react';

const FeatureCardItem = ({
    title,
    text
}) => {
    return (
        <div className="feature__card_item">
            <p>{title}</p>
            <h5>{text}</h5>
        </div>

    )
}

export default FeatureCardItem