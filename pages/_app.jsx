import App, { Container } from 'next/app';
import Head from 'next/head';
import Favicon from 'react-favicon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title> Healthy Ways
          </title> <meta
            property="og:title"
            content="Healthy Ways Introduction"
          />
          <meta
            property="og:description"
            content="Looking for an easier way to stay on top of your health and also be able to contact medical professionals in time of need?"
          />
          <meta
            name="description"
            content="Looking for an easier way to stay on top of your health and also be able to contact medical professionals in time of need?"
          />
          <meta
            property="og:image"
            content="react-portfolio-master\static\pics\healthywayslogo_0.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
            integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
            crossOrigin="anonymous"
          />
        </Head> <Favicon url="src\images\blood-drop.jpg" />
        <div className="container mainContainer">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MainApp;
