import { createContext, useState } from "react";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([
    { id: 1, postId: 1, text: "Wow! Inspiring text", author: "Bob" },
    { id: 2, postId: 2, text: "No, not at all!", author: "Meg" },
  ]);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentContext.Provider>
  );
};
