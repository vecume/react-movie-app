import React from 'react';
import { Router } from '@reach/router';

//Styles
import { GlobalStyle } from './styles/GlobalStyle';
///////////////////

//Import Components
import Header from './elements/Header';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';
////////////////////
function App() {


  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App;
