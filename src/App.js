import './App.css';
import { HomePage } from './components/homePage';
import { AboutPage } from './components/aboutPage';
import { WorkPage } from './components/workPage';
import { ContactPage } from './components/contactPage';
import { SocialMediaBar } from './components/socialMediaBar';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (


<BrowserRouter>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
          </ul>
        </nav>
       <nav>
        <SocialMediaBar />
       </nav>

    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/resume" element={< />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
