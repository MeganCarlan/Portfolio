

export function AboutPage() {
    return (
     <div className="AboutPage">
       <div className ="contentContainer">
        <h1 className="green">About Me</h1>
        <p className="lightestSlate">
        Hello world! My name is Megan Carlan. I am a full stack web developer who is passionate about building websites that are beautiful, functional, and user-friendly. I have a strong foundation in HTML, CSS, and JavaScript, as well as experience with popular frameworks and libraries such as React and Node.js.
        </p>
        <p className="lightestSlate">
        With an eye for design and a love of problem-solving, I enjoy working with clients to create custom websites that meet their unique needs and reflect their brand identity. From front-end development to back-end coding and database management, I am dedicated to delivering high-quality web solutions that are tailored to each client's specifications.
        </p>
        <p className="lightestSlate">
       <p className="lightestSlate">
       In addition to web development, I am committed to staying up-to-date with the latest industry trends and technologies. This includes participating in online courses and workshops, attending web development conferences, and contributing to open source projects.
        </p>
        </p>
        <p className="green">
            Here are a few technologies I have been working with recently:
        </p>
        <div className="ulContainer">
        <ul className="lightestSlate">
            <li> JavaScript (ES6+)</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node.js</li>
        </ul>
        <ul className="lightestSlate">
            <li>TypeScript</li>
            <li>MYSQL</li>
            <li>React</li>
            <li>WordPress</li>
            
        </ul>
        </div>
        </div>
        <img className="headshot" src={require("/Users/mcarlan/Desktop/repos/portfolio/src/assets/headshot.png")} alt="My Image" />

    </div>
    )
  }
  
  ;
