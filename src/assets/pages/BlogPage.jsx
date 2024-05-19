import React from "react";
import CreateBlog from "../components/CreateBlog";
import ReadBlogs from "../components/ReadBlogs";

const Landingpage = () => {
  return (
    <div>
      <ReadBlogs />
      <CreateBlog />
    </div>
  );
};

export default Landingpage;
