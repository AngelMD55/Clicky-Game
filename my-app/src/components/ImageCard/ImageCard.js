import React from 'react';

function ImageCard(props) {
    return (
        <div >
            <img alt={props.name} id={props.id} src={props.image} style={imageStyle} onClick={props.incrementCounter} />
        </div>
    );
};

const imageStyle = {
    width: "185px",
    height: "185px",
    border: "5px",
    borderStyle: "double",
    borderColor: "goldenrod",
    margin: "8px 25px",
    curson: "pointer"
};

export default ImageCard;
