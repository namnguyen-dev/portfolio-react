import React, { useEffect } from 'react';
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
  const callback = entries => {
    entries.forEach(entry => {
      const elementDistanceFromTop = entry.target.getBoundingClientRect().top;

      if (
        elementDistanceFromTop <=
        (window.innerHeight || document.documentElement.clientHeight / 1.25)
      ) {
        entry.target.style.animation = entry.target.dataset.animate;
      } else {
        entry.target.style.animation = 'none';
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    const animationItems = document.querySelectorAll('.animate');

    animationItems.forEach(item => {
      observer.observe(item);
    });
  }, []);

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
