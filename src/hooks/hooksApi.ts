import { useEffect, useState } from "react";
import { PostData, UserMapProps } from "../utils/props";
import { fetchInitialData, fetchUsers } from "../utils/api";

export function usePostsApi() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    async function init_posts_api() {
      const postData = await fetchInitialData(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(postData);
    }
    init_posts_api();
  }, []);

  return posts;
}

export function useUserApi() {
  const [users, setUsers] = useState<UserMapProps>({});
  useEffect(() => {
    async function init_users_api() {
      const userData = await fetchUsers(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(userData);
    }
    init_users_api();
  }, []);

  return users;
}
