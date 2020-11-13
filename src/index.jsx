import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => ( <
    div >
    <
    Navbar / >
    <
    Jumbotron phrase = "Optimize wellness and performance through blood tests, nutrition, and science."
    subtitle = "A quick and easy way to stay on top of overall health and wellness." / >
    <
    h3 > Status Updates < /h3> <
    hr / >
    <
    div className = "row" >
    <
    div className = "col-md-6" >
    <
    Picture source = ""
    alt = ""
    deployed = "" / >
    <
    /div> <
    div className = "col-md-6" >
    <
    Picture source = ""
    alt = ""
    deployed = "" / >
    <
    /div> <
    div className = "col-md-6" >
    <
    Picture source = ""
    alt = ""
    deployed = "" / >
    <
    /div> <
    div className = "col-md-6" >
    <
    Picture source = ""
    alt = ""
    deployed = "" / >
    <
    /div> <
    /div> <
    Footer / >
    <
    /div>
);

export default Home;