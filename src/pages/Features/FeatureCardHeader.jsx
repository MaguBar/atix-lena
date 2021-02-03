import React from 'react';

const FeatureCardHeader = ({
    title,
    text,
    imgSrc
}) => {
    return (
        <div className="feature__card_header">
            <div className="feature__header_data">
                <p>{title}</p>
                <h5>{text}</h5>
            </div>
            <img src={imgSrc}></img>
        </div>

    )
}

export default FeatureCardHeader