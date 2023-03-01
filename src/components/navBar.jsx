import { NavLink } from "react-router-dom";

export function NavBar() {

    function handleClick() {
        window.open("/path/to/pdf/file.pdf", "_blank");
      };
    

    return(
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
              <button onClick={handleClick} className="resumeButton" to="/resume">Resume</button>
            </li>
          </ul>
        </nav>
    )
}