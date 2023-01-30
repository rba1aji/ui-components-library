import React from "react";
import './Scroll.components.css'

export default function Scroll(props) {

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
