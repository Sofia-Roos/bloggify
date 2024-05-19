import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Post 1",
      text: "Lorem ipsum hej på dig blablablabla",
      author: "john@doe.se",
    },
    {
      id: 2,
      title: "Post 2",
      text: "Lorem ipsum hej på dig blablablabla",
      author: "jane@doe.se",
    },
    {
      id: 3,
      title: "Post 3",
      text: "Lorem ipsum hej på dig blablablabla",
      author: "silly@doe.se",
    },
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {props.children}
    </BlogContext.Provider>
  );
};
