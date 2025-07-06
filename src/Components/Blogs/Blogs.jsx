import React, { useEffect, useState } from 'react';
import Blog from './Blog';
// import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, [])
    console.log(blogs);
    return (
        <div>
              {/* <h1>total:{blogs.length}</h1> */}
              {
                blogs.map((blog)=><Blog blog={blog}></Blog>)
              }
        </div>
    );
};

export default Blogs;

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