// src/views/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <ul className="blog-posts">
        <li><Link to="/blog/first-post">First Blog Post</Link></li>
        <li><Link to="/blog/second-post">Second Blog Post</Link></li>
      </ul>
    </div>
  );
};

export default Blog;

