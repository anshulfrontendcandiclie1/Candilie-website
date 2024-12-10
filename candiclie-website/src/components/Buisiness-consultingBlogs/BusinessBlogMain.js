import React from 'react'
import { Routes, Route } from "react-router-dom";

import './BusinessBlog.css'; 
import Home from './Home';
import CreateBlogPage from './CreateBlogPage';
import BlogsExplorePage from './BlogsExplorePage';

function BusinessBlogMain() {
    return (
        
            <Routes>
                <Route path="/" element={
                    <Home />
                }></Route>

                <Route path="/create_blog" element={
                    <CreateBlogPage />
                }></Route>
                <Route path="/BlogsExplorePage" element={
                    <BlogsExplorePage />
                }></Route>
            </Routes>
        
    )
}

export default BusinessBlogMain