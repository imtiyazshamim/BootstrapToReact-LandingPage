import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Services.css';

const ServiceCard = ({ iconClass, title, description, delay }) => (
  <div className={`col-xl-3 col-md-6 d-flex align-items-stretch mt-4 ${delay ? `mt-xl-0` : ''}`} data-aos="zoom-in" data-aos-delay={delay}>
    <div className="icon-box">
      <div className="icon"><i className={iconClass}></i></div>
      <h4><a href="">{title}</a></h4>
      <p>{description}</p>
    </div>
  </div>
);

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const services = [
    {
      iconClass: "bx bxl-dribbble",
      title: "Lorem Ipsum",
      description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      delay: "100"
    },
    {
      iconClass: "bx bx-file",
      title: "Sed ut perspici",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      delay: "200"
    },
    {
      iconClass: "bx bx-tachometer",
      title: "Magni Dolores",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      delay: "300"
    },
    {
      iconClass: "bx bx-layer",
      title: "Nemo Enim",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      delay: "400"
    }
    // ... add more services here if needed
  ];

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
