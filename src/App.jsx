import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
function App() {
  const [bookmark, setBookmark] = useState([]);
  const [takenTime, settakenTime] = useState(0);

  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog]);
  }
  const handleMarkAsRead = (time) => {
    settakenTime(takenTime + time);
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
            bookmark.map((bookm) => <p>{bookm.title}</p>)
          }
        </div>
      </div>
    </>
  )
}
export default App
