

export function AboutPage() {
    return (
     <div className="AboutPage">
       <div className ="contentContainer">
        <h1 className="green">About Me</h1>
        <p className="lightestSlate">
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="lightestSlate">
            Fast-forward to today, and I have had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
        </p>
        <p className="green">
            Here are a few technologies I have been working with recently:
        </p>
        <div className="ulContainer">
        <ul className="lightestSlate">
            <li> JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
        <ul className="lightestSlate">
            <li>Type Script</li>
            <li>MYSQL</li>
            <li>WordPress</li>
        </ul>
        </div>
        </div>
        <img className="headshot" src={require("/Users/mcarlan/Desktop/repos/portfolio/src/assets/headshot.png")} alt="My Image" />

    </div>
    )
  }
  
  ;