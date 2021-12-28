// Creating The Fisrt Heading Of the Page The Siren
import { Link } from "react-router-dom";
// Import the css
import "./Styles/Heading.css"
import "./Styles/index.css"
// Import The Image
import collape from "./Images/Nav.png"

function Heading(){

   // Function For Toggle navbar
   const toggleBox = () => {
        var element = document.getElementById("navbarH");
      //   console.log(element)
        element.classList.toggle("navbarHide");
       
    };

    return(
        <>
          <div className={"HeadingSpacing"}>
                <h1><span className={"headingThe"}>The</span><span className={"headingS"}>Siren</span></h1>
                <div className={"NavbarCollapse"}>
                    <img src={collape} alt="..." className={"NavImg"} onClick={toggleBox} />
                </div>
          </div>
          <div className={"navbar navbarHide"} id="navbarH">
              <div className={"navbarsmall"}>
                 <Link to="/" className={"HeaderLink"} onClick={toggleBox}>Home</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Bollywood" className={"HeaderLink"} onClick={toggleBox}>Bollywood</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Technology" className={"HeaderLink"} onClick={toggleBox}>Technology</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Hollywood" className={"HeaderLink"} onClick={toggleBox}>Hollywood</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Fitness" className={"HeaderLink"} onClick={toggleBox}>Fitness</Link>
              </div>
              <div >
                 <Link to="/Food" className={"HeaderLink"} onClick={toggleBox}>Food</Link>
              </div>
          </div>
          <hr style={{height:"2px"}}/>
        </>
    )
}

export default Heading;