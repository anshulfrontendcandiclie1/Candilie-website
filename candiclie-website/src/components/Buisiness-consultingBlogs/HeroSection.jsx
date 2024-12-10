import React, { useState } from 'react';
import './BusinessBlog.css';

function HeroSection({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchQuery);
        }
    };

    return (
        <div className="col-12 background">
            <div className="Heading">
                <label className="hero-heading" >
                    Business consulting Blog
                </label><br />
                <input
                    type="Search"
                    className="Search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <i
                    className="bi bi-search search-icon"
                    style={{
                        color: 'black',
                        position: 'relative',
                        right: '35px',
                        fontSize: '20px',
                        top: '3px'
                    }}
                />
            </div>
        </div>
    );
}

export default HeroSection;
