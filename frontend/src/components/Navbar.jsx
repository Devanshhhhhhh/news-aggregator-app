import { VscAccount } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import "./Navbar.css"

export default function Navbar( {onSearch }){
    const [inputValue, setInputValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(inputValue);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    const handleAccountClick = (event) => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        // navbar 
        <header className="nav">
            <div className="nav-container">
                <div className="logo">
                    <a href="/" className="logo-name">MindFeed</a>
                </div>
                {/* right section  */}
                <div className="right-section">
                    <div className="search-bar">
                        <button className="search-button" onClick={handleSearchClick}>
                            <FiSearch size={20} />
                        </button>
                        <input type="text"
                            placeholder="Search for News..."
                            className="search-input"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    {/* account dropdown */}
                    <div className="account-menu">
                        <button className="account-button" onClick={handleAccountClick}>
                            <VscAccount size={20} />
                        </button>

                        {isDropdownOpen && (
                            <div className="dropdown">
                                <a href="/profile">Profile</a>
                                <a href="/settings">Settings</a>
                                <a href="/logout">Logout</a>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </header>
    );
}