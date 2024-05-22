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
import PageLayout from "./assets/components/PageLayout";
import "./App.css";
import heroimg from "../public/hero-img.jpg";

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
            <Route
              path="/"
              element={
                <PageLayout>
                  <div className="landingpage-container">
                    <h1 className="landingpage-h1">Welcome to Bloggify!</h1>
                    <h2 className="landingpage-herotext-h2">
                      Unleash the Power of Your Voice and Connect with the
                      World.
                    </h2>
                    <p className="landingpage-herotext">
                      Create captivating blog posts and explore a world of
                      diverse perspectives. <br />
                      With Bloggify, you can effortlessly share your stories,
                      ideas, and expertise, while discovering and <br />
                      connecting with other passionate writers. <br /> <br />
                      Join our vibrant community today and unleash the power of
                      <span className="p-tomato"> your</span> voice!
                    </p>
                  </div>
                  <div className="img-container">
                    <img className="heroimg" src={heroimg} alt="" />
                  </div>
                </PageLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </CommentProvider>
    </BlogProvider>
  );
};

export default App;
