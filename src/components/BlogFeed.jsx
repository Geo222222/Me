import React, { useEffect, useState } from 'react';
import './BlogFeed.css';

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://news-api-flask-tmit.onrender.com/api/blog-feed')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog-feed">
      <h2>Latest Blog Posts</h2>
      <div className="blog-grid">
        {posts.map((post, i) => (
          <div className="blog-card" key={i}>
            <h3>{post.title}</h3>
            <p>{post.description}...</p>
            <small>{post.published}</small>
            <br />
            <a href={post.url} target="_blank" rel="noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFeed;
