import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => ( <
    div >
    <
    Navbar / >
    <
    Jumbotron phrase = "Get a simple update on your health."
    subtitle = "Get healthy, fast" / >
    <
    h3 > My Story < /h3> <
    hr / >
    <
    div className = "row" >
    <
    div className = "col-md-6 aboutSections" >
    <
    img className = "profilePic profilePic1"
    src = "../static/pics/DSC_6082.jpg"
    alt = "profilepic" / >
    <
    /div> <
    div className = "col-md-6 aboutSections" >
    <
    h4 className = "bio bio1" >
    A biological information application -
    User can record various necessary biological information and show medical professionals at the time of an emergency or a scheduled appointment.Features: Record weight, blood pressure, blood sugar, medication list, dietary journal Ideas
    for breakdown of features:
    -Use a library to create graphs
    for our data -
    Research api / library to create a pie chart to show nutritional information breakdown -
    Notify the user to record information like blood sugar / pressure -
    Email notification to record data and have the info recorded through a reply email to the app. <
    /h4> <
    /div> <
    /div> <
    h3 className = "skills" > Features < /h3> <
    hr / >
    <
    div className = "row" >
    <
    div className = "col" >
    <
    div className = "row" >
    <
    div className = "col-sm-6" >
    <
    IconImage source = "../static/pics/html.png"
    alt = "html" / >
    <
    IconImage source = "../static/pics/bootstrap.png"
    alt = "bootstrap" / >
    <
    IconImage source = "../static/pics/css.png"
    alt = "css" / >
    <
    /div> <
    div className = "col-sm-6" >
    <
    IconImage source = "../static/pics/githubIcon.png"
    alt = "github" / >
    <
    IconImage source = "../static/pics/handlebars.png"
    alt = "handlebars" / >
    <
    IconImage source = "../static/pics/javascript.png"
    alt = "javascript" / >
    <
    /div> <
    /div> <
    /div> <
    /div> <
    div className = "row" >
    <
    div className = "col" >
    <
    div className = "row" >
    <
    div className = "col-sm-6" >
    <
    IconImage source = "../static/pics/jquery.png"
    alt = "jquery" / >
    <
    IconImage source = "../static/pics/mern.jpg"
    alt = "mern" / >
    <
    IconImage source = "../static/pics/mongodb.png"
    alt = "mongodb" / >
    <
    /div> <
    div className = "col-sm-6" >
    <
    IconImage source = "../static/pics/mysql.png"
    alt = "mysql" / >
    <
    IconImage source = "../static/pics/nodejs.png"
    alt = "node" / >
    <
    IconImage source = "../static/pics/React.png"
    alt = "react" / >
    <
    /div> <
    /div> <
    /div> <
    /div> <
    Footer / >
    <
    /div>
);

export default App;