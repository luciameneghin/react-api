import { useState, useEffect } from 'react'
import axios from 'axios'
import PostsCard from './components/PostsCard'

function App() {
  const initialFormData = {
    title: '',
    content: '',
    image: '',
    tags: []
  }

  const baseApiUrl = 'http://localhost:3000'
  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  const fetchPosts = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(error => {
        console.log('errore', error)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <>
      <div className="container">
        <h1 className="text-center">Posts</h1>
        <div className="row">
          {posts.map(post => {
            return (
              <PostsCard
                key={post.id}
                post={post}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
