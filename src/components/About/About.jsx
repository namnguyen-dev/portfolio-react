import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section-center">
        <div className="section-title about-title">
          <h2>About me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-center">
          <div className="about-center-info">
            <h3>Get to know me!</h3>
            <p>
              My name is Nam Nguyen. I started learning how to code in January
              2021 and spent most of my day experimenting with HTML, CSS and
              JavaScript, React.
              <br />I enjoy coding and the challenge of learning something new
              everyday. My goal is to pursue a career in the field of front-end
              development.
            </p>
          </div>

          <div>
            <h3>Education</h3>
            <div>
              <p>2012-2015</p>
              <h4>Bachelor Of English Language Studies - Hutech University</h4>
            </div>
            <div>
              <p>2009-2012</p>
              <h4>Business Administration - Vietnamese American College</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
