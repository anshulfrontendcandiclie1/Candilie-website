import React, { useRef, useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import businessConsulting from './assets/businessConsulting.avif';
import businessConsulting1 from './assets/businessConsulting1.avif';
import businessConsulting2 from './assets/businessConsulting2.avif';
import businessConsulting3 from './assets/businessConsulting3.avif';
import businessConsulting4 from './assets/businessConsulting4.avif';
import businessConsulting5 from './assets/businessConsulting5.avif';
import { useTheme } from '../ThemeContext';
import './BusinessBlog.css';


import { Link } from 'react-router-dom';

const blogData = [
    {
        src: businessConsulting,
        title: "SEO vs SEM",
        body: "SEO optimizes a website to drive organic traffic, SEM uses both organic and paid search such as Pay-Per-Click or programmatic advertising to boost web traffic.  ",
        time: "4 days ago",
        blogger: "written by Ayaan"
    },
    {
        src: businessConsulting1,
        title: "SAAS,AI and Technology",
        body: "Discover the impact of AI in modern technology and businesses.",
        time: "1 week ago",
        blogger: "written by shashi"
    },
    {
        src: businessConsulting2,
        title: "Development: The Future",
        body: "How SaaS is changing the business landscape for good.",
        time: "2 weeks ago",
        blogger: "written by Ashi"
    },

    {
        src: businessConsulting3,
        title: "Design: your creativity",
        body: "How Candicle Consultancy can be your guide? Navigate the business maze with confidence.",
        time: "4 days ago",
        blogger: "written by Ayushi"
    },

    {
        src: businessConsulting4,
        title: "Design your future",
        body: "Top Graphic Design trends that will shape the creative industry in 2024 and beyond! How SaaS is changing the business landscape for good.How SaaS is changing the business landscape for good.",
        time: "4 days ago",
        blogger: "written by john doe"
    },

    {
        src: businessConsulting5,
        title: "SAAS",
        body: "Grow your personal “garden” of inspiration and references with the awesome online tool: mymind.",
        time: "4 days ago",
        blogger: "written by john doe"
    },

];

function BlogSection({ searchQuery }) {
    const blogSectionRef = useRef(null);
    const [indexBlog, setIndexBlog] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        if (searchQuery) {

            blogSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchQuery]);


    const filteredBlogs = blogData.filter((blog) => {
        const title = blog.title ? blog.title.toLowerCase() : '';
        const body = blog.body ? blog.body.toLowerCase() : '';
        const query = searchQuery.toLowerCase();

        return title.includes(query) || body.includes(query);
    });

    return (<div className={`blog-view ${theme}`}>
        <div className="laptop-view-blog">
            <div className="row justify-content-evenly blog-section-cards" ref={blogSectionRef} style={{ marginTop: '3%', marginLeft: "0px", marginBottom: '40px', width: '100%', minHeight: '380px' }}>
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={index} style={{ width: '32%' }}>
                            <SingleCard
                                src={blog.src}
                                title={blog.title}
                                body={blog.body}
                                time={blog.time}
                                blogger={blog.blogger}
                                className="cards-custom"
                                style={{ height: '100%', boxShadow: '3px 3px 8px 3px black' }}
                            />
                        </div>
                    ))
                ) : (
                    <div style={{ fontSize: '25px', marginLeft: '33vw' }}>Sorry! No blogs found.</div>
                )}
            </div>
            <Link to='BlogsExplorePage' className='blogPage-link'>
                <button className='explore-button'><a>Explore More</a></button>
            </Link>
        </div>
        <div className='phone-view-blog' style={{ paddingLeft: '50px' }} >
            <div className="row justify-content-evenly blog-section-cards" ref={blogSectionRef} style={{ marginTop: '3%', marginLeft: "0px", marginBottom: '40px', width: '100%', minHeight: '380px' }}>
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.slice(indexBlog, indexBlog + 3).map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5 " key={index} >
                            <SingleCard
                                src={blog.src}
                                title={blog.title}
                                body={blog.body}
                                time={blog.time}
                                blogger={blog.blogger}
                                className="cards-custom"
                                style={{ height: '100%', boxShadow: '3px 3px 8px 3px black' }}
                            />
                        </div>
                    ))
                ) : (
                    <div style={{ fontSize: '25px', marginLeft: '33vw' }}>Sorry! No blogs found.</div>
                )}
            </div>
            <button className='next-button' disabled={indexBlog >= filteredBlogs.length - 3} onClick={() => setIndexBlog(indexBlog + 3)} ><a>Next</a></button>
        </div><hr />
    </div>);
}

export default BlogSection;