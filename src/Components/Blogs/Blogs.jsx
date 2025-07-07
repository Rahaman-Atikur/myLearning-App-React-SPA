import React, { useEffect, useState } from 'react';
import Blog from './Blog';
// import Blog from './Blog';

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, [])
    console.log(blogs);
    return (
        <div className='grid grid-cols-2'>
              {/* <h1>total:{blogs.length}</h1> */}
              {
                blogs.map((blog)=><Blog key={blog.id} handleBookmark={handleBookmark} blog={blog}></Blog>)
              }
        </div>
    );
};

export default Blogs;

