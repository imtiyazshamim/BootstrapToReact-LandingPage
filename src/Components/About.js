import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiCheckDoubleLine } from 'react-icons/ri';
import '../assets/css/About.css';

const AboutListItem = ({ children }) => (
  <li><RiCheckDoubleLine className='icon-blue'/> {children}</li>
);

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const aboutContent = [
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit in voluptate",
    "Sunt in culpa qui officia deserunt mollit anim id est laborum"
  ];

  return (
    <section id='About-2' >
      <div className='container' data-aos="fade-up">
        <div className='section-title' >
          <h2>About Us</h2>
        </div>
        <div className='row content'>
          <div className='col-lg-6'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className='no-bullet'>
              {aboutContent.map((item, index) => (
                <AboutListItem key={index}>{item}</AboutListItem>
              ))}
            </ul>
          </div>
          <div className='col-lg-6 pt-4 pt-lg-0'>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
