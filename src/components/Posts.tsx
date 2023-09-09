import { PostData, PostsProps } from "../utils/props";
import Card from "./Card";

const Posts: React.FC<PostsProps> = ({ posts, users }) => {
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
