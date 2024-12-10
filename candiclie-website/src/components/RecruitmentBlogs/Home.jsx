import React, { useState } from 'react'
import HeroSection from './HeroSection'
import BodySection from './BodySection'
import BlogSection from './BlogSection'
import PostAndKeywork from './PostAndKeywork'
import { useTheme } from '../ThemeContext';


function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const { theme } = useTheme();
    return (


            <div className={`main ${theme}`}>
                <HeroSection onSearch={handleSearch} />
                <BodySection></BodySection>
                <BlogSection searchQuery={searchQuery} />
                <PostAndKeywork />
                
            </div>
        



    )
}

export default Home