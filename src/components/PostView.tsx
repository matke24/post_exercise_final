import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchInitialData } from "../utils/api";
import { CommentProps } from "../utils/props";
import Comment from "./Comment";

const PostView = () => {
  const [commentList, setCommentList] = useState([]);

  const location = useLocation().state;

  useEffect(() => {
    async function getComments() {
      const comments = await fetchInitialData(
        `https://jsonplaceholder.typicode.com/posts/${location.postId}/comments`
      );
      setCommentList(comments);
    }
    getComments();
  }, []);
  return (
    <div className="container w-75 my-5">
      <div className="row p-3">
        <div className="col-6 col-md-8">
          <div className="card">
            <div className="card-header">- {location.author}</div>
            <div className="card-body">
              <h2 className="card-title display-1 text-uppercase text-center">
                {location.title}
              </h2>
              <p className="card-text display-5 text-black-50">
                {location.body}
              </p>
              <Link to="/posts" className="btn btn-primary">
                Back to Posts
              </Link>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4">
          <ul className="nav nav-sidebar">
            {commentList.map((comment: CommentProps) => {
              return (
                <Comment
                  body={comment.body}
                  email={comment.email}
                  key={comment.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostView;
