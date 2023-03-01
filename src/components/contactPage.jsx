
export function ContactPage() {

    function handleClick() {
          window.open("mailto:mgcarlan@gmail.com");
        };

    return(
        <div className="contactPage">
           <div className="contentContainer">
                <div className="green">What's next? </div>
                <h1 className="lightestSlate">Get in touch</h1>
                <p className="lightSlate">Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!</p>
                <button onClick={handleClick}>Say Hello!</button>
                </div>
            <img className="contactPhoto" src={require("/Users/mcarlan/Desktop/repos/portfolio/src/assets/contact.png")} alt="My Image" />
        </div>
    )
}