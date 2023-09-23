import Post from "./Post";

const Posts = ({ posts }) => {
    console.log(posts);
  return posts == null
    ? ""
    : posts.map((elem) => {
        return (<Post post={elem} key={elem.id} />)
      });
};

export default Posts;
