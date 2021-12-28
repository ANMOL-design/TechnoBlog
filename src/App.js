import { Component } from "react";
import { BrowserRouter, Route,  Switch} from "react-router-dom";
import Data from "./Data";
import Footer from "./Footer";
import Heading from "./Header";
import Home from "./Home"
import Bollywood from "./Bollywood";
import "./Styles/index.css";

class App extends Component {
    
  render(){
    return (
      <BrowserRouter>
          {/* Adding the header Component on Top of All Pages we react */}
          <Heading />
          <Switch>
              <Route path="/data" component={Data} />  
              <Route path="/:value" component={Bollywood} />          
              <Route path="/" component={Home} />
          </Switch>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
