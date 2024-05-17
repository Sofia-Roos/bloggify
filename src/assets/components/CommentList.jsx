import React, { useContext } from "react";
import { CommentContext } from "../context/CommentContext";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import "./CommentList.css";

const CommentList = (props) => {
  const { comments, setComments } = useContext(CommentContext);
  const { userName } = useContext(UserContext);
  const textInput = useInput();
  const filteredComments = comments.filter((comment) => {
    return comment.postId === props.id;
  });

  const addCommentBtn = (e) => {
    e.preventDefault();

    const maxId =
      comments.length > 0
        ? Math.max(...comments.map((comment) => comment.id))
        : 0;

    setComments([
      ...comments,
      {
        id: maxId + 1,
        postId: props.id,
        text: textInput.value,
        author: userName,
      },
    ]);
    textInput.reset();
  };

  return (
    <div className="commentlist">
      {filteredComments.map((comment) => (
        <p key={comment.id}>
          "{comment.text}", {comment.author}
        </p>
      ))}
      <label>Comment</label>
      <input
        type="text-area"
        placeholder="Enter your comment here..."
        {...textInput}
      />
      <button onClick={addCommentBtn}>Add comment</button>
    </div>
  );
};

export default CommentList;
