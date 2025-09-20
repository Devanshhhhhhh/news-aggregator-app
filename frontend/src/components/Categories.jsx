import "./Categories.css"

export default function Categories({ onCategoryClick }){
const categories = ["All", "World", "Business", "Technology", "Entertainment", "Sports", "Science", "Health"];

    return(
        <div className="category-bar">
                <div className="categories-list">
                    {categories.map((cat, index) => (
                        <button
                        key={index}
                        className="category-button"
                        onClick={() => onCategoryClick(cat.toLowerCase())}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
        </div>
    );
}