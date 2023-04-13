import { NavLink } from "react-router-dom";

export function NavBar() {

    function handleClick() {
      window.open("/Resume.pdf", "_blank");
      };
    

    return(
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> 
            <li>
            <button onClick={handleClick} className="resumeButton">Resume</button>
            </li>
          </ul>
        </nav>
    )
}