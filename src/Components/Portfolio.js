import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Portfolio.css';

// Import images for the portfolio items
import portfolioImg1 from '../assets/img/portfolio/portfolio-1.jpg';
import portfolioImg2 from '../assets/img/portfolio/portfolio-2.jpg';
import portfolioImg3 from '../assets/img/portfolio/portfolio-3.jpg';
import portfolioImg4 from '../assets/img/portfolio/portfolio-4.jpg';
import portfolioImg5 from '../assets/img/portfolio/portfolio-5.jpg';
import portfolioImg6 from '../assets/img/portfolio/portfolio-6.jpg';
import portfolioImg7 from '../assets/img/portfolio/portfolio-7.jpg';
import portfolioImg8 from '../assets/img/portfolio/portfolio-8.jpg';
import portfolioImg9 from '../assets/img/portfolio/portfolio-9.jpg';
// Continue importing other images similarly

function PortfolioItem({ image, title, category, imageFull, detailsLink }) {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${category}`}>
      <div className="portfolio-img"><img src={image} className="img-fluid" alt={title} /></div>
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{category}</p>
        <a href={imageFull} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={title}><i className="bx bx-plus"></i></a>
        <a href={detailsLink} className="details-link" title="More Details"><i className="bx bx-link"></i></a>
      </div>
    </div>
  );
}

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    
    { image: portfolioImg2, title: 'Web 3', category: 'filter-web', imageFull: 'assets/img/portfolio/portfolio-2.jpg', detailsLink: 'portfolio-details.html' },
    { image: portfolioImg7, title: 'Card 2', category: 'filter-card', imageFull: 'assets/img/portfolio/portfolio-7.jpg', detailsLink: 'portfolio-details.html' },
    { image: portfolioImg8, title: 'Web 2', category: 'filter-card', imageFull: 'assets/img/portfolio/portfolio-8.jpg', detailsLink: 'portfolio-details.html' },
    {image: portfolioImg9, title: 'Web 2', category: 'filter-web', imageFull: 'assets/img/portfolio/portfolio-9.jpg', detailsLink: 'portfolio-details.html' },
    { image: portfolioImg3, title: 'App 2', category: 'filter-app', imageFull: 'assets/img/portfolio/portfolio-3.jpg', detailsLink: 'portfolio-details.html' },
    { image: portfolioImg4, title: 'Card 2', category: 'filter-card', imageFull: 'assets/img/portfolio/portfolio-4.jpg', detailsLink: 'portfolio-details.html' },
    { image: portfolioImg5, title: 'Web 2', category: 'filter-web', imageFull: 'assets/img/portfolio/portfolio-5.jpg', detailsLink: 'portfolio-details.html' },
    {image: portfolioImg6, title: 'Web 2', category: 'filter-app', imageFull: 'assets/img/portfolio/portfolio-6.jpg', detailsLink: 'portfolio-details.html' },
    { image: portfolioImg1, title: 'App 1', category: 'filter-app', imageFull: 'assets/img/portfolio/portfolio-1.jpg', detailsLink: 'portfolio-details.html' },
  ];

  const filteredItems = activeFilter === '*'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.includes(activeFilter));

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit...</p>
          </div>

          <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <li className={activeFilter === '*' ? 'filter-active' : ''} onClick={() => handleFilterClick('*')}>All</li>
            <li className={activeFilter === 'filter-app' ? 'filter-active' : ''} onClick={() => handleFilterClick('filter-app')}>App</li>
            <li className={activeFilter === 'filter-card' ? 'filter-active' : ''} onClick={() => handleFilterClick('filter-card')}>Card</li>
            <li className={activeFilter === 'filter-web' ? 'filter-active' : ''} onClick={() => handleFilterClick('filter-web')}>Web</li>
          </ul>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
