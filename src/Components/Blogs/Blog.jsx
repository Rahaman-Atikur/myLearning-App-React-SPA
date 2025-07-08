import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookmark,handleMarkAsRead }) => {
 
  return (
    <div className='m-2 text-black'>
      {/* <h1>{blog.title}</h1> */}
      <div className="card bg-green-200 shadow-sm ">
        <figure className='w-60'>
          <img
            src={blog.cover}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <div className="author flex gap-4 justify-around items-center">
            <h3>{blog.author}</h3>
            <img className='w-16' src={blog.author_img} alt="" />
            <button onClick={() => handleBookmark(blog)}>
              <FaBookmark size={25} />
            </button>

          </div>

          <div className="flex">
            {
              blog.hashtags.map((hash) => <p>{hash}</p>)
            }
          </div>


          <div className="card-actions justify-end">
            <button onClick={()=>handleMarkAsRead(blog.reading_time)} className="btn btn-primary">Mark as Read</button>
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