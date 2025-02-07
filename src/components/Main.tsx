import React from "react";
import FadeIn from './FadeIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image">
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Avatar" className="img-fluid rounded"/>
        </div>
        
        <div className="content">
          <FadeIn>
            <h1>Ratchakit Kittichokthanawat</h1>
            <p className="role">Information Technology Student</p>
            
            <div className="bio-wrapper">
              <p className="bio">
                I am an undergraduate student in Information Technology, 
                <span className="highlight"> passionate about Web Development</span> with skills in:
              </p>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">ReactJS</span>
                <span className="skill-tag">NextJS</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">TailwindCSS</span>
              </div>
              <p className="bio">
                I am seeking an internship as a 
                <div className="skills-list">
                <span className="skill-tag">Web Developer</span>
                <span className="skill-tag">Front-End Developer</span>
                <span className="skill-tag"> Back-End Developer</span>
               
              </div>
                to enhance my skills 
                and contribute to impactful projects.
              </p>
            </div>

            <div className="contact-info">
              <div className="social_icons">
                <a href="https://github.com/kittichanawat" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <h5 className="text-white">github.com/kittichanawat</h5>
              </div>

              <div className="social_icons">
                <i className="fas fa-phone"></i>
                <h5 className="text-white">096-9375927</h5>
              </div>

              <div className="social_icons">
                <a href="mailto:ratchakitti2546@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <h5 className="text-white">ratchakitti2546@gmail.com</h5>
              </div>

              <div className="social_icons">
                <i className="fas fa-map-marker-alt"></i>
                <h5 className="text-white">Hua Hin, Prachuap Khiri Khan, Thailand</h5>
              </div>
            </div>

            <div className="mobile_social_icons">
              <a href="https://github.com/kittichanawat" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:ratchakitti2546@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+66989159526">
                <i className="fas fa-phone"></i>
              </a>
              <a href="https://goo.gl/maps/your-location" target="_blank" rel="noreferrer">
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default Main;