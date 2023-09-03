import { useEffect, useState } from "react";
import { fetchInitialData, fetchUsers } from "../utils/api";
import { PostData, UserMapProps, PostsProps } from "../utils/props";
import Card from "./Card";

const Posts: React.FC<PostsProps> = ({ setPostData, setUserData }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState<UserMapProps>({});

  useEffect(() => {
    async function init_api() {
      const postData = await fetchInitialData(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const userData = await fetchUsers(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPosts(postData);
      setPostData(postData);
      setUsers(userData);
      setUserData(userData);
    }
    init_api();
  }, []);

  return (
    <div className="w-75 mx-auto mb-3">
      <h1 className="display-3 p-3 mb-3 mx-auto text-center">Posts</h1>
      <ul className="list d-flex flex-wrap gap-3 justify-content-center">
        {posts.map((post: PostData) => {
          return (
            <li className="list-group" key={post.id}>
              <Card
                postId={post.id}
                title={post.title}
                body={post.body}
                author={users[post.userId]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
