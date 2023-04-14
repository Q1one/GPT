import './App.scss'

import Post from './components/Post'
import Pagination from './components/Pagination'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])


    useEffect( () => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        const jsonData = await response.json();
        setData(jsonData)
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(50)

    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const current = data.slice(firstPost, lastPost)
  return (
    <div className="App">
      <h1>GALLERY</h1>
      <Post data={current}/>
      <Pagination 
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        />
    </div>
  )
}

export default App
