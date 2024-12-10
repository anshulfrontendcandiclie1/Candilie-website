import React, { useState, useRef } from 'react';
import image from './assets/image.jpg';
import digitalMarket from './assets/digitalMarket.jpg';
import digitalMarket2 from './assets/digitalMarket2.jpg';
import digitalMarket3 from './assets/digitalMarket3.jpg';
import digitalMarket4 from './assets/digitalMarket4.jpg';
import digitalMarket5 from './assets/digitalMarket5.jpg';
import digitalMarketMain from './assets/digitalMarket6.avif';
import Post from './Post';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const postsData = [
    {
        src: digitalMarketMain,
        heading: 'Achieving fashion elegance runway to real-time work',
        description: 'Top Graphic Design trends that will shape the creative industry in 2024 and beyond!',
        time: 'Jun 2013',
        keywords: ['DESIGN', 'FASHION', 'TECHNOLOGY']
    },
    {
        src: digitalMarket5,
        heading: 'New Development in AI Technology',
        description: 'Discover office inspiration and go behind the scenes of our own garden studio!',
        time: 'Jul 2022',
        keywords: ['DEVELOPMENT', 'BLOCKCHAIN', 'TECHNOLOGY', 'BIG DATA']
    },
    {
        src: digitalMarket4,
        heading: 'SaaS: The Future of Software',
        description: 'Top Graphic Design trends that will shape the creative industry in 2024 and beyond!',
        time: 'Jan 2010',
        keywords: ['SAAS', 'DESIGN', 'DEVELOPMENT', 'TECHNOLOGY']
    },
    {
        src: digitalMarket3,
        heading: 'Big Data Trends in 2023',
        description: 'This box has a background color with an alpha channel',
        time: 'June 2013',
        keywords: ['SAAS', 'BIG DATA', 'DEVELOPMENT']
    },
    {
        src: digitalMarket,
        heading: 'Blockchain Revolution',
        description: 'Take part in our Design Contest and enhance your portfolio!',
        time: 'Aug 2023',
        keywords: ['BLOCKCHAIN', 'FINTECH', 'TECHNOLOGY']
    }
];

function PostAndKeyword() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedKeyword, setSelectedKeyword] = useState('');
    const postSectionRef = useRef(null);  // To reference the post section

    const filterPosts = () => {
        let filteredPosts = postsData;

        if (searchTerm) {
            filteredPosts = filteredPosts.filter(post =>
                post.heading.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedKeyword) {
            filteredPosts = filteredPosts.filter(post =>
                post.keywords.includes(selectedKeyword)
            );
        }

        return filteredPosts;
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setSelectedKeyword('');
    };

    const handleKeywordClick = (keyword) => {
        setSelectedKeyword(keyword);
        setSearchTerm('');

        // Scroll to the Popular Recruitment Post section
        if (postSectionRef.current) {
            postSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const { theme } = useTheme();


    return (
        <>
            <div className={`container-fluid row mb-5 custom-row ${theme}`}>
                <div ref={postSectionRef} className="col-lg-6 col-sm-12 post-custom" style={{ borderRight: '1px solid grey' }}>
                    <div className="p-2 row" style={{ marginLeft: '7%' }}>
                        <div className='popular-post'>
                            <h4>Popular Digital Marketing Post</h4>
                        </div>

                        {filterPosts().map((post, index) => (
                            <Post
                                key={index}
                                src={post.src}
                                heading={post.heading}
                                description={post.description}
                                time={post.time}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 keyword-body">
                    <input
                        type='search'
                        placeholder='Search'
                        className='post-search'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <i className="bi bi-search search-icon"></i>
                    <p className='post-keyword-head'>Keywords</p>
                    <button className='post-keyword' onClick={() => handleKeywordClick('DEVELOPMENT')}>DEVELOPMENT</button>
                    <button className='post-keyword' onClick={() => handleKeywordClick('DESIGN')}>DESIGN</button>
                    <button className='post-keyword' onClick={() => handleKeywordClick('TECHNOLOGY')}>TECHNOLOGY</button>
                    <button className='post-keyword' onClick={() => handleKeywordClick('SAAS')}>SAAS</button>
                    <button className='post-keyword' onClick={() => handleKeywordClick('BIG DATA')}>BIG DATA</button>
                    <button className='post-keyword' onClick={() => handleKeywordClick('BLOCKCHAIN')}>BLOCKCHAIN</button>
                </div>
            </div>
            <hr />
            <div className={`p-3 post-blog-section ${theme}`}>
                <div className='blog-image'>
                    <div style={{ width: '100%', marginTop: '20px', textAlign: "center" }} className='post-blog-heading'>
                        <h1 style={{ fontWeight: "600" }}>Start Your Passions, Your Way</h1>
                        <h4>Write a unique and beautiful blog here.</h4>
                    </div>
                    <div className='blogPage-link pt-5'>
                        <Link to='create_blog' className='create-blog-button px-3 py-2' style={{ textDecoration: "none", padding: '10px' }}>
                            Create Blog
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostAndKeyword;
