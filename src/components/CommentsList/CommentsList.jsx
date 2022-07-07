import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { commentsContext } from "../../contexts/commentsContext";
import CommentsContainer from "../CommentsContainer/CommentsContainer";

const CommentsList = () => {
  const navigate = useNavigate();
  const { comments, getComments } = useContext(commentsContext);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="comments-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          fontSize: "50px",
          marginBottom: "30px",
        }}>
        <p>Comments</p>
      </div>
      <div className="container-btn-add-comment">
        <button
          className="add-comment-btn"
          onClick={() => navigate("/add-comments")}>
          Add Comment
        </button>
      </div>

      {comments.map(item => (
        <CommentsContainer key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CommentsList;
