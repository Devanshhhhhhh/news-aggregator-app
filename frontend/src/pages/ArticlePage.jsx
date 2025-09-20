import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import HomeFooter from "../components/HomeFooter";
import ArticleCard from "../components/ArticleCard";

export default function ArticlePage() {
    return(
        <>
            <Navbar />
            <Categories />
            <ArticleCard
                title="How AI is Changing the World"
                description="Longer description of the article goes here…"
                source="BBC"
                image="https://via.placeholder.com/800x400"
            />
            <HomeFooter />
        </>
    );
}