import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
    
  function handlePortfolioButtonClick () {
    navigate('/work');
  };
  
  return (
    <div className="HomePage">
      <div className="contentContainer">
        <p className="green nameIs">Hi, my name is</p>
        <h1 className="lightestSlate">Megan Carlan</h1>
        <h2 className="green">I like building websites!</h2>
        <p className="lightSlate">I am a beginner, full-stack web developer focusing on blah blah blah I will write this later and make it more filled out but for now I am blah blah blahing. The website you are on now is the first addition to my web developer portfolio. Please click the button below if you'd like to see more! </p>
        <button onClick={handlePortfolioButtonClick} className="portfolioButton">Portfolio</button>
      </div>
      <img className="homePagePhoto" src={require("../assets/homepagephoto.png")} alt="My Image" />
    </div>
  );
}
