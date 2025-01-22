const PostsCard = (props) => {
  const { title, content, image, tags } = props.post;
  return (
    <div className="col-12 col-md-6 my-3">
      <div className="card">
        <img src={image} alt={title} className="my-3 mx-3" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><strong>Presentazione: </strong><br />{content}</p>
          <p className="card-text"><strong>Tags: </strong><br />{tags.join(', ')}</p>
          <a href="#" className="btn btn-danger">Elimina</a>
        </div>
      </div>

    </div>
  )
}

export default PostsCard
