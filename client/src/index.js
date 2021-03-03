import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render( <App/> , document.getElementById("root"));
//registerServiceWorker();
const Home = () => ( 
    <div>
    <Navbar/>
    <Jumbotron phrase = "Healthier."
    subtitle = "A simpler way to stay healthy."/>
    <h3 > In today 's world, it can be difficult to stay up to speed on health issues. Let our application help you keep track.</h3> <hr/> 
    <div className = "row">
    <div className = "col-md-6">
    <Picture source = "react-portfolio-master\static\pics\medical-graphs-8-728.jpg"
    alt = "Graphs"
    deployed = ""/>
    </div> <div className = "col-md-6"> <Picture source = "react-portfolio-master\static\pics\healthgraph1.png"
    alt = "charts"
    deployed = ""/>
    </div> <div className = "col-md-6"> <Picture source = "react-portfolio-master\static\pics\Section-of-medical-data-entry-form-example.png"
    alt = "data entry logs"
    deployed = ""/>
    </div> </div >
    <Footer/>
    </div>
);

export default Home;
