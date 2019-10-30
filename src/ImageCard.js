import React from 'react';

function ImageCard(props) {

    return (<div className="image-card-text text-white">
        <img src={process.env.PUBLIC_URL + props.image}/>
        <div style={{backgroundColor: props.bgColor, width: '100%'}}>
            <p className="image-card-title">{props.topText}</p>
            <p className="image-card-subtitle">{props.bottomText}</p>
        </div>
    </div>);
}

export default ImageCard;