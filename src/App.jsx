import React from "react";
import Header from "./assets/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./assets/pages/BlogPage";
import { BlogProvider } from "./assets/context/BlogContext";
import { CommentProvider } from "./assets/context/CommentContext";
import AboutPage from "./assets/pages/AboutPage";
import MyPage from "./assets/pages/MyPage";
import LoginComponent from "./assets/components/LoginComponent";
import RegisterComponent from "./assets/components/RegisterComponent";
import PrivateRoutes from "./assets/components/PrivateRoutes";
import "./App.css";

import Landingpage from "./assets/pages/Landingpage";

const App = () => {
  return (
    <BlogProvider>
      <CommentProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/mypage" element={<MyPage />} />
            </Route>

            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/" element={<Landingpage />} />
          </Routes>
        </BrowserRouter>
      </CommentProvider>
    </BlogProvider>
  );
};

export default App;
