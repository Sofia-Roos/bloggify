import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BlogContext } from "../context/BlogContext";
import useInput from "../hooks/useInput";
import "./CreateBlog.css";

const CreateBlog = () => {
  const { userName } = useContext(UserContext);
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
        author: userName,
      },
    ]);
    titleInput.reset();
    textInput.reset();
  };
  return (
    <div className="createblog-content">
      <form className="createblog-content-form" onSubmit={handleSubmit}>
        <label className="createblog-content-label">Title</label>
        <input
          className="createblog-content-input"
          type="text"
          placeholder="Enter your title here..."
          {...titleInput}
        />
        <label className="createblog-content-label">Message</label>
        <input
          className="createblog-content-input"
          type="text-area"
          placeholder="Enter your message here..."
          {...textInput}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
