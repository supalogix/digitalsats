import React from 'react';

const BlogList = () => {
  return (
    <div className="blog__container">
      <h2 className="blog__title">Latest Blog Posts</h2>
      <div className="blog__item">
        <h3 className="blog__item-title">Advancements in Gravitational Anomaly Detection</h3>
        <p className="blog__item-excerpt">
          Discover how our groundbreaking technology is setting the stage for the future of space exploration.
        </p>
        <a href="#blog" className="blog__item-link">Read More</a>
      </div>
      <div className="blog__item">
        <h3 className="blog__item-title">How to Find Planet X Using Gravity Data</h3>
        <p className="blog__item-excerpt">
          Explore our technical guide on leveraging gravitational anomalies to search for unknown celestial bodies.
        </p>
        <a href="#blog" className="blog__item-link">Read More</a>
      </div>
    </div>
  );
};

export default BlogList;
