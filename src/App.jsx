import './App.css'
import Blogs from './Components/Blogs/Blogs'
function App() {
  return (
    <>
      <navbar></navbar>
      <div className='flex'>
        <div className='w-[70%] bg-amber-300'>
          <Blogs></Blogs>
        </div>
        <div className='w-[30%] bg-green-500'>
          {/* <h1>Selective</h1> */}
        </div>
      </div>
    </>
  )
}
export default App
