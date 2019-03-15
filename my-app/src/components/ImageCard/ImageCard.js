import React from 'react'

function ImageCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img alt={props.name} src={props.image} />     
            </div>
        </div>
    )
}

export default ImageCard
