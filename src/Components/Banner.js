import React, { useEffect } from 'react';
import { PlayCircle } from 'react-bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner_img from '../assets/img/hero-img.png';
import '../assets/css/Banner.css';

function BannerButton({ href, className, icon, text }) {
  return (
    <a href={href} className={className}>
      {icon && <PlayCircle className='icon-video'/>}
      <span>{text}</span>
    </a>
  );
}

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Better Solutions For Your Business</h1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <BannerButton href="#get" className="btn-get-started scrollto" text="Get Started" />
                <BannerButton href="#video" className="glightbox btn-watch-video" icon={<PlayCircle className='icon-video'/>} text="Watch Video" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={Banner_img} className="img-fluid animated" alt="Banner" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
