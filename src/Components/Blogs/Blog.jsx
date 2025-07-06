import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div>
      {/* <h1>{blog.title}</h1> */}
      <div className="card  shadow-sm">
        <figure>
          <img
            src={blog.cover}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.author}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
// {
//     "id": 1,
//     "cover": "https://i.ibb.co/84Zfw2n/1.jpg",
//     "title": "Top 10 ES6 Features You Must Know",
//     "author_img": "https://i.ibb.co/VvLNdLL/boy1.png",
//     "author": "Hamza Sohail",
//     "posted_date": "September 15, 2023",
//     "reading_time": 5,
//     "hashtags": [
//         "beginners",
//         "es6"
//     ]
// }