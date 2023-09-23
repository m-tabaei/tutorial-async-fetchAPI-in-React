import { useEffect, useState } from "react";
import Posts from "../Posts/Posts";

const App = () => {
  let [post, setPost] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let res = await data.json();
        setPost(res);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(true);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="container-fluid p-0 bg-dark text-white">
        <div className="row m-0">
          {error === null ? "" : <h3 className="text-danger">{error}</h3>}
          {loading === false ? (
            ""
          ) : (
            <div className="d-block">
              <span className="spinner-border spinner-border-sm"></span>
            </div>
          )}
          <Posts posts={post} />
        </div>
      </div>
    </>
  );
};

export default App;
