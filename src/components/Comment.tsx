import { useState } from "react";
import { CommentProps } from "../utils/props";

const Comment = ({ body, email }: CommentProps) => {
  const [likes, setLike] = useState(0);
  const handleClick = () => {
    setLike((perv) => perv + 1);
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center mb-2"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card">
        <div className="card-body">
          <p className="card-text">{body}</p>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <small>{email}</small>
            <span className="badge badge-primary bg-primary badge-pill text-light">
              {likes}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Comment;
