import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Tools to help you keep on top of your health." subtitle="Use our tools to help you keep track of your health." />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="react-portfolio-master\static\pics\10-ways-to-stay-healthy-at-work.png" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
      With all the changing environments and health concerns growing in today's society, everyone could use a simpler way to keep up to date on their health. Utilizing our application will help users maintain consistent data and keep track of health concerns.
        </h4>
      </div>
    </div>
    <h3 className="skills">Application tools</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="react-portfolio-master\static\pics\healthgraph1.png" alt="graphs" />
            <IconImage source="react-portfolio-master\static\pics\medical-graphs-8-728.jpg" alt="charts" />
            <IconImage source="react-portfolio-master\static\pics\Section-of-medical-data-entry-form-example.png" alt="data entry logs" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
