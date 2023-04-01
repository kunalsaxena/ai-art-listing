import React from 'react'
import ArtworkList from './components/ArtworkList';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './index.css';

const App = () => {
  return (
    <div>
        <Navigation />
        <ArtworkList />
        <Footer />
    </div>
  )
};

export default App;