import React from "react";
import CreateBlog from "../components/CreateBlog";
import ReadBlogs from "../components/ReadBlogs";
import "./BlogPage.css";

const BlogPage = () => {
  return (
    <>
      <div className="blogpage-container">
        <div className="blogpage-createblog">
          <h1 className="blogpage-createblog-h1">
            Create your own blog post here:
          </h1>
          <CreateBlog />
        </div>
        <div className="blogpage-readblogs">
          <h1 className="blogpage-readblogs-h1">Other blog posts: </h1>
          <ReadBlogs />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
