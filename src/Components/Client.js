import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Clients.css';
import client1 from '../assets/img/clients/client-1.png';
import client2 from '../assets/img/clients/client-2.png';
import client3 from '../assets/img/clients/client-3.png';
import client4 from '../assets/img/clients/client-4.png';
import client5 from '../assets/img/clients/client-5.png';
import client6 from '../assets/img/clients/client-6.png';

const ClientLogo = ({ src, alt }) => (
  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
    <img src={src} className="img-fluid" alt={alt} />
  </div>
);

function Client() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const clientLogos = [
    { src: client1, alt: 'Client 1' },
    { src: client2, alt: 'Client 2' },
    { src: client3, alt: 'Client 3' },
    { src: client4, alt: 'Client 4' },
    { src: client5, alt: 'Client 5' },
    { src: client6, alt: 'Client 6' }
  ];

  return (
    <div>
      <section className="clients section-bg"> 
        <div className="container">
          <div className="row" data-aos="zoom-in">
            {clientLogos.map((client, index) => (
              <ClientLogo key={index} src={client.src} alt={client.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
