import React from "react";
import './Animation.components.css'

export default function Animation(props) {

    const { color, backgroundColor, text, image, width, height } = props;

    return (
        <div
            className="container"
        >
            <img
                src={image} alt='Snow'
                style={{
                    width: width,
                    height: height
                }}
                className="image"
            />
            <p style={{ color: color, backgroundColor: backgroundColor }}
                className="hovertext"
            >
                {text}
            </p>
        </div>
    );
}
