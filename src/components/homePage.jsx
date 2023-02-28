import { useState, useEffect } from 'react';

export function HomePage() {

  
  
  
  
  
  return (
      <div className="HomePage">
    
        <div className="green">Hi, my name is</div>
        <h1 className="lightestSlate">Megan Carlan</h1>
        <h2 className="lightSlate">I like building websites!</h2>
        <p className="lightSlate">I am a beginner, full-stack web developer focusing on blah blah blah I will write this later and make it more filled out but for now I am blah blah blahing. The website you are on now is the first addition to my web developer portfolio. Please click the button below if you'd like to see more! </p>

        <button>Portfolio</button>
        <img className="homePagePhoto" src={require("/Users/mcarlan/Desktop/repos/portfolio/src/assets/homepagephoto.png")} alt="My Image" />
      </div>
    );
  }
  
  ;