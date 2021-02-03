import React from 'react';

const FeatureCardFooterItem = ({
    title,
    text
}) => {
    return (
        <div className="feature__footer_aside">
            <p>{title}</p>
            <h5>{text}</h5>
        </div>

    )
}

export default FeatureCardFooterItem