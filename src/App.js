import React from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from './components';

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
