import React from 'react';
import { Router } from '@reach/router';

//Styles
import { GlobalStyle } from './styles/GlobalStyle';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
///////////////////

//Import Components
import Header from './elements/Header';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';
import ActorPage from './ActorPage';
import Footer from './elements/Footer';
////////////////////
function App() {


  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/movie/:movieId" />
        <ActorPage path="/actor/:actorId" />
        <NotFound default />
      </Router>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App;
