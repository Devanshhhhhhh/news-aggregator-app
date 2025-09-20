import React from "react"
import './HomeFooter.css'

const HomeFooter = () => {
    return (
        <footer className="home-footer">
            <p className="reserved-rights">© {new Date().getFullYear()} MindFeed. All rights reserved.</p>
            <div className="footer-links">
                <a href="#"> About </a>
                <span>|</span>
                <a href="#"> Contact </a>
                <span>|</span>
                <a href="#"> Privacy Policy </a>
            </div>
        </footer>
    );
}

export default HomeFooter;