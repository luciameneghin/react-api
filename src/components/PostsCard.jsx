const PostsCard = (props) => {
  const { title, content, image, tags } = props.post;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">{tags}</p>
        <a href="#" className="btn btn-danger">Elimina</a>
      </div>
    </div>
  )
}

export default PostsCard
