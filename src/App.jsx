import React from "react";
import Header from "./assets/components/Header";
import { UserProvider } from "./assets/context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./assets/pages/Landingpage";
import { BlogProvider } from "./assets/context/BlogContext";
import { CommentProvider } from "./assets/context/CommentContext";
import AboutPage from "./assets/pages/AboutPage";
import MyPage from "./assets/pages/MyPage";

const App = () => {
  return (
    <UserProvider>
      <BlogProvider>
        <CommentProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </CommentProvider>
      </BlogProvider>
    </UserProvider>
  );
};

export default App;
