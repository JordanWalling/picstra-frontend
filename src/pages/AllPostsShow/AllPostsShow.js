import { useState, useEffect } from "react";
import { SinglePostShow } from "../index";
function AllPostsShow() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <SinglePostShow post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllPostsShow;
