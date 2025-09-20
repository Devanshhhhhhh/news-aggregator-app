import React from "react";
import "./Card.css";

const Card = ({title, description, source, image, url}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">   
            <div className="card">
                <img src={image} alt={title} />
                <h3> {title} </h3>
                <p> {description.length > 140 ? description.slice(0, 140) + "..." : description} </p>
                <p className="source"> Source: {source} </p>
            </div>
        </a>
    )
}

export default Card;