// BlogSection.jsx
import React, { useState, forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';
import digitalMarket from './assets/digitalMarket.jpg';
import digitalMarket2 from './assets/digitalMarket2.jpg';
import digitalMarket3 from './assets/digitalMarket3.jpg';
import digitalMarket4 from './assets/digitalMarket4.jpg';
import digitalMarket5 from './assets/digitalMarket5.jpg';
import digitalMarket6 from './assets/digitalMarket6.avif';
import { useTheme } from '../ThemeContext';


const blogData = [
    {
        src: digitalMarket6,
        title: "SEO vs SEM",
        body: "SEO optimizes a website to drive organic traffic, SEM uses both organic and paid search.",
        time: "4 days ago",
        blogger: "written by Ayaan"
    },
    {
        src: digitalMarket,
        title: "SAAS, AI and Technology",
        body: "Discover the impact of AI in modern technology and businesses.",
        time: "1 week ago",
        blogger: "written by Shashi"
    },
    {
        src: digitalMarket2,
        title: "Development: The Future",
        body: "How SaaS is changing the business landscape for good.",
        time: "2 weeks ago",
        blogger: "written by Ashi"
    },
    {
        src: digitalMarket3,
        title: "Design: Your Creativity",
        body: "Navigate the business maze with confidence.",
        time: "4 days ago",
        blogger: "written by Ayushi"
    },
    {
        src: digitalMarket4,
        title: "Design Your Future",
        body: "Top Graphic Design trends for 2024 and beyond.",
        time: "4 days ago",
        blogger: "written by John Doe"
    },
    {
        src: digitalMarket5,
        title: "SAAS",
        body: "Grow your personal “garden” of inspiration with mymind.",
        time: "4 days ago",
        blogger: "written by John Doe"
    },
    // Add other blog data items here...
];

const BlogSection = forwardRef(({ searchQuery }, ref) => {
    // const [indexBlog, setIndexBlog] = useState(0);

    // useImperativeHandle(ref, () => ({
    //     scrollIntoView() {
    //         ref.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }));

    const blogSectionRef = useRef(null);
    const [indexBlog, setIndexBlog] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        if (searchQuery) {

            blogSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchQuery]);

    const filteredBlogs = blogData.filter((blog) => {
        const title = blog.title.toLowerCase();
        const body = blog.body.toLowerCase();
        const query = searchQuery.toLowerCase();

        return title.includes(query) || body.includes(query);
    });




    return (
        <div className={`blog-view ${theme}`}>
            <div className='laptop-view-blog'>
                <div className="row justify-content-evenly blog-section-cards" ref={blogSectionRef} style={{ marginTop: '3%', marginBottom: '40px', width: '100%', minHeight: '380px' }}>
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

            <div className='phone-view-blog' style={{ paddingLeft: '65px' }} >
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
        </div>
    );
});

export default BlogSection;
