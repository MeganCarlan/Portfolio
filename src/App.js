import './App.css';
import { AboutPage } from './components/aboutPage';
import { WorkPage } from './components/workPage';
import { ContactPage } from './components/contactPage';
import { SocialMediaBar } from './components/socialMediaBar';
import { Email } from './components/email';
import { Footer } from './components/footer';
import { NavBar } from './components/navBar';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (


    <BrowserRouter basename={process.env.PUBLIC_URL}>
        
       <nav>
        <NavBar />
        <SocialMediaBar />
        <Email />
        <Footer />
       </nav>

    
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/resume" element={< />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
