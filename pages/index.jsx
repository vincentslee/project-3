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
import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Optimize wellness and performance through blood tests, nutrition, and science." />
    <h3>to your health</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source=".JPG" alt="Weight" deployed="https://johnglendening.github.io/" />
      </div>
      <div className="col-md-6">
        <Picture source=".JPG" alt="E" deployed="" />
      </div>
      <div className="col-md-6">
        <Picture source="r.JPG" alt="N" deployed="/" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
