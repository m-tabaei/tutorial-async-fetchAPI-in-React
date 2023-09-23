const Post = ({post}) => {


  return (
    <>
      <div className="col-6">
        <h3>{post.title.substr(0, 30)}</h3>
        <p>{post.body.substr(0, 100)}</p>
      </div>
    </>
  );
};

export default Post;
