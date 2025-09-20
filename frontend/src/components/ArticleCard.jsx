import React from "react";
import Card from "./Card";
import "./ArticleCard.css";

export default function ArticleCard({title, description, source, image}) {
    return(
        <>
            <div className="article-card">
                <Card
                    title={title}
                    description={description}
                    source={source}
                    image={image}
                />
            </div>
        </>
    );
}