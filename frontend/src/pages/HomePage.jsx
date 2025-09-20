import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import ContentArea from '../components/ContentArea';
import HomeFooter from '../components/HomeFooter';
import { useState } from "react";

function HomePage(){
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSearchQuery('');
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        setSelectedCategory('');
    }

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <Categories onCategoryClick={handleCategoryClick} />
            <ContentArea selectedCategory={selectedCategory} searchQuery={searchQuery} />
            <HomeFooter />
        </>
    );
}

export default HomePage;