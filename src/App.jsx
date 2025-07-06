import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
function App() {
  const [bookmark, setBookmark] = useState();
  const handleBookmark = () => {
    console.log();
  }
  return (
    <>
      <navbar></navbar>
      <div className='main-container flex gap-10'>
        <div className='left-container w-[70%]  text-center'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className='right-container w-[30%] bg-gray-600 border-7'>
          {/* <h1>Selective</h1> */}
        </div>
      </div>
    </>
  )
}
export default App
