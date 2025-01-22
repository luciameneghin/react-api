const PostsCard = (props) => {
  const { title, content, image, tags } = props.post;
  const onRemove = props.onRemove
  return (
    <div className="col-12 col-md-6 my-3">
      <div className="card h-100">
        <img src={image} alt={title} className="my-3 mx-3 img-thumbnail" />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title fw-bold">{title}</h4>
          <p className="card-text my-4"><strong>Descrizione: </strong><br />{content}</p>
          <p className="card-text"><strong>Tags: </strong><br />{tags.join(', ')}</p>

          <div className="mt-auto text-end">
            <a href="#" className="btn btn-danger" onClick={onRemove}>Elimina</a>
          </div>


        </div>
      </div>
    </div>
  )
}

export default PostsCard
