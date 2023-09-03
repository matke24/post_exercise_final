import { useNavigate } from "react-router-dom";
import { CardProps } from "../utils/props";

const Card = ({ postId, title, body, author }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="card border-dark mb-3 card-max-w link-hover"
      style={{ cursor: "pointer" }}
    >
      <div
        onClick={() => {
          navigate(`/posts/${postId}`, {
            state: { postId, title, body, author },
          });
        }}
        className="text-decoration-none"
      >
        <div className="card-body">
          <div className="card-header text-uppercase text-dark">
            <h5 className="card-title text-center">{title}</h5>
          </div>
          <p className="card-text text-black-50 my-1 p-2">{body}</p>
          <div className="card-footer text-black-50">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
