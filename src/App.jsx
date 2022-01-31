import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import RandomBeer from './components/RandomBeer';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

const App = () => (
  <>
    <Header />
    <RandomBeer />
    <SearchBox />
    <SearchResults />
    <Footer />
  </>
);

export default App;
