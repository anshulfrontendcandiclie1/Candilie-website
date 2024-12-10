import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

function HeroSection({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const { theme } = useTheme();


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchQuery);
        }
    };

    return (
        <div className={`col-12 background ${theme}`} >
            <div className="Heading">
                <label className="hero-heading" >
                    Recruitment Blog
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
