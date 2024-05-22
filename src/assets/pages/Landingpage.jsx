import React from "react";
import heroimg from "../../../public/hero-img.jpg";
import "./Landingpage.css";

const Landinpage = () => {
  return (
    <div>
      <div className="landingpage-container">
        <h1 className="landingpage-h1">Welcome to Bloggify!</h1>
        <h2 className="landingpage-herotext-h2">
          Unleash the Power of Your Voice and Connect with the World.
        </h2>
        <p className="landingpage-herotext">
          Create captivating blog posts and explore a world of diverse
          perspectives. <br />
          With Bloggify, you can effortlessly share your stories, ideas, and
          expertise, while discovering and <br />
          connecting with other passionate writers. <br /> <br />
          Join our vibrant community today and unleash the power of
          <span className="p-tomato"> your</span> voice!
        </p>
      </div>
      <div className="img-container">
        <img className="heroimg" src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Landinpage;
