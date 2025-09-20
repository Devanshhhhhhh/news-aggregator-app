import { useEffect, useState } from "react";
import "./ContentArea.css";
import Card from "./Card";

const ContentArea = ({selectedCategory, searchQuery}) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = import.meta.env.VITE_GNEWS_KEY;

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try{
                let url;
                if(searchQuery){
                    url = `https://gnews.io/api/v4/top-headlines?topic=${searchQuery}&country=in&lang=en&max=6&token=${apiKey}`;
                } else if(selectedCategory === 'all'){
                    url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=6&token=${apiKey}`;
                } else {
                    url = `https://gnews.io/api/v4/top-headlines?topic=${selectedCategory}&country=in&lang=en&max=6&token=${apiKey}`
                }

                const response = await fetch(url);

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setArticles(data.articles);
                setLoading(false);
            } catch(error) {
                console.error("Error fetching news: ", error);
                setError("Failed to fetch news. Please try again later.");
                setLoading(false);
            }
        };

        fetchNews();
    }, [selectedCategory, searchQuery]);

    if (loading) {
    // Show 6 skeletons like cards
        return (
        <div className="content-area">
            {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
            </div>
            ))}
        </div>
        );
    }

    if(error){
        return <div className="content-area">Error: {error}</div>
    }

    if(articles.length === 0){
        return <div className="content-area">No news articles found.</div>
    }


  return (
    <div className="content-area">
        {articles.map((article, index) => (
            <Card 
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
                source={article.source.name}
                url={article.url}
            />
        ))}
    </div>
  );
}

export default ContentArea;