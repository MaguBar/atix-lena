import React from 'react';
import VerifiedIcon from '../../assets/imgs/VerifiedIcon.svg'

const DownloadItem = ({
    title,
    text
}) => {
    return (
        <div className="download__container_item">
            <img src={VerifiedIcon}></img>
            <div className="download__item_data">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default DownloadItem