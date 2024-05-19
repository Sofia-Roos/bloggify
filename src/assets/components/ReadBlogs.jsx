import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import CommentList from "./CommentList";
import "./ReadBlogs.css";
import { AuthContext } from "../context/AuthContext";

const ReadBlogs = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const [editingBlog, setEditingBlog] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog.id);
    setNewTitle(blog.title);
    setNewText(blog.text);
  };

  const handleSave = (id) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, title: newTitle, text: newText } : blog
    );
    setBlogs(updatedBlogs);
    setEditingBlog(null);
  };

  return (
    <div className="readblogs-container">
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            {editingBlog === blog.id ? (
              <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                ></textarea>
                <button onClick={() => handleSave(blog.id)}>Save</button>
                <button onClick={() => setEditingBlog(null)}>Cancel</button>
              </div>
            ) : (
              <div className="readblogs-content">
                <h2>{blog.title}</h2>
                <p>{blog.text}</p>
                <p>{blog.author}</p>

                <CommentList id={blog.id} />

                {currentUser.email === blog.author ? (
                  <>
                    {" "}
                    <button onClick={() => handleEdit(blog)}>Edit</button>
                    <button onClick={() => handleDelete(blog.id)}>
                      Delete
                    </button>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReadBlogs;
