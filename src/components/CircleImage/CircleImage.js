import React from 'react';

import './CircleImage.scss';

const CircleImage = ({imageUrl}) => {
    return (
        <div className="circle-image">
            <img src={imageUrl} className="circle-image__img" />
        </div>
    )
}

export default CircleImage;