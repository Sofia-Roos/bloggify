import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import useInput from "../hooks/useInput";
import "./CreateBlog.css";
import { AuthContext } from "../context/AuthContext";

const CreateBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const titleInput = useInput();
  const textInput = useInput();
  const { blogs, setBlogs } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const maxId =
      blogs.length > 0 ? Math.max(...blogs.map((blog) => blog.id)) : 0;

    setBlogs([
      ...blogs,
      {
        id: maxId + 1,
        title: titleInput.value,
        text: textInput.value,
        author: currentUser.email,
      },
    ]);
    titleInput.reset();
    textInput.reset();
  };
  return (
    <div className="createblog-content">
      <form className="createblog-content-form" onSubmit={handleSubmit}>
        <h1 className="createblog-content-label">Title</h1>
        <input
          className="createblog-content-input"
          type="text"
          placeholder="Enter your title here..."
          {...titleInput}
        />
        <h1 className="createblog-content-label">Message</h1>
        <input
          className="createblog-content-textarea"
          type="text-area"
          placeholder="Enter your message here..."
          {...textInput}
        />

        <button className="createblog-content-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
