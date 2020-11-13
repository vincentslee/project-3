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
    Jumbotron phrase = "Keep your health."
    subtitle = "Stay on top of health issues with easy to follow documentation" / >
    <
    h3 > My Story < /h3> <
    hr / >
    <
    div className = "row" >
    <
    div className = "col-md-6 aboutSections" >
    <
    img className = "Pic Pic1"
    src = ".jpg"
    alt = "" / >
    <
    /div> <
    div className = "col-md-6 aboutSections" >
    <
    h4 className = "bio bio1" >

    <
    /h4> <
    /div> <
    /div> <
    h3 className = "skills" > Tools < /h3> <
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
    IconImage source = ".png"
    alt = "" / >
    <
    IconImage source = ".png"
    alt = "" / >
    <
    IconImage source = ".png"
    alt = "" / >
    <
    /div> <
    div className = "col-sm-6" >
    <
    IconImage source = ".png"
    alt = "" / >
    <
    IconImage source = ".png"
    alt = "" / >
    <
    IconImage source = ".png"
    alt = "" / >
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
    IconImage source = ".png"
    alt = "" / >
    <
    IconImage source = ".jpg"
    alt = "" / >
    <
    IconImage source = ".png"
    alt = "" / >
    <
    /div> <
    div className = "col-sm-6" >
    <
    IconImage source = "..png"
    alt = "m" / >
    <
    IconImage source = ".png"
    alt = "" / >
    <
    IconImage source = ".png"
    alt = "" / >
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