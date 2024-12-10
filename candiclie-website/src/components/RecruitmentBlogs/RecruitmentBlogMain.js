import React from 'react'
import { Routes, Route } from "react-router-dom";
import BlogsExplorePage from './BlogsExplorePage';
import CreateBlogPage from './CreateBlogPage';
import Home from './Home';


function Router() {
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

export default Router