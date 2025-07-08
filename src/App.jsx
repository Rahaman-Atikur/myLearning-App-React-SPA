import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
function App() {
  const [bookmark, setBookmark] = useState([]);
  const [takenTime, settakenTime] = useState(0);

  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog]);
  }
  const handleMarkAsRead = (time, id) => {

    settakenTime(takenTime + time);
    handleRemoveFromBookMark(id);
  }
  const handleRemoveFromBookMark = (id) => {
    const remainingBookMark = bookmark.filter((mark) => mark.id !== id);
    setBookmark(remainingBookMark);
  }
  console.log(bookmark);
  return (
    <>
      <navbar></navbar>
      <p>{takenTime}</p>
      <div className='main-container flex gap-10'>

        <div className='left-container w-[70%]  text-center'>
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className='right-container w-[30%] bg-gray-600 border-7'>
          {/* <h1>Selective</h1> */}
          {
            bookmark.map((bookm) => <p className='bg-amber-600 p-2 my-4 mx-2 text-white'>{bookm.title}</p>)
          }
        </div>
      </div>
    </>
  )
}
export default App
