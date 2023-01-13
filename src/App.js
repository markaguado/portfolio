import './App.css';
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Body from './component/body';
import Portfolio from './pages/portfolio';

function App() {

  return (
    <div>
      <Header />
      <Body />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
