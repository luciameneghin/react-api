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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleAddPost = (e) => {
    e.preventDefault();
    //creo l'array di tags
    const tagsArr = formData.tags
      .split(',')
      .map(tag => tag.trim())
    //oggetto da inviare
    const newPost = { ...formData, tags: tagsArr }

    //invio nuovo elemento
    axios.post(`${baseApiUrl}/posts`, newPost)
      .then(res => {
        setPosts(res.data)
      })

    setFormData(initialFormData)
  }

  const handleRemove = (id) => {
    axios.delete(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== id))
        // fetchPosts()
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className='bg-dark'>
      <div className="container">
        <h1 className="text-center py-3 text-light"><strong>Posts</strong></h1>
        <div className="row my-3">
          {posts.map(post => {
            return (
              <PostsCard
                key={post.id}
                post={post}
                onRemove={() => handleRemove(post.id)}
              />
            )
          })}
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h4 className='my-3'>Crea un nuovo post</h4>
            </div>
            <form action="#">
              <div className="mb-3">
                <label htmlFor="image">Aggiungi l'url dell'immagine</label>
                <input
                  id='image'
                  type="text"
                  name='image'
                  className='form-control'
                  placeholder='aggiungi url immagine'
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title">Nome della ricetta</label>
                <input
                  id='title'
                  type="text"
                  name='title'
                  className='form-control'
                  placeholder='scrivi il titolo'
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content">Aggiungi una descrizione della ricetta</label>
                <textarea
                  id='content'
                  type="text"
                  name='content'
                  className='form-control'
                  placeholder='scrivi la descrizione della nuova ricetta'
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tags">Aggiungi dei tag</label>
                <input
                  id='tags'
                  type="text"
                  name='tags'
                  className='form-control'
                  placeholder='es: dolci, primi piatti, ...'
                  value={formData.tags}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 text-end">
                <button
                  className='btn btn-warning my-3'
                  type='submit'
                  onClick={handleAddPost}
                >
                  Aggiungi nuovo post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
