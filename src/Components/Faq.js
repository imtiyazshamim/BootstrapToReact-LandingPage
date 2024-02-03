import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Faq.css';

function FaqItem({ question, answer, id, isOpen, toggleAccordion }) {
  return (
    <li data-aos="fade-up" data-aos-delay={100} key={id}>
      <i className="bx bx-help-circle icon-help"></i>{' '}
      <a
        data-bs-toggle="collapse"
        className={`collapse ${isOpen ? 'show' : ''}`}
        href={`#${id}`}
        role="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={(e) => {
          e.preventDefault();
          toggleAccordion(id);
        }}
      >
        {question} <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'} icon-show`}></i>
      </a>
      <div id={id} className={`collapse ${isOpen ? 'show' : ''}`} data-bs-parent="#faq-list">
        <p>{answer}</p>
      </div>
    </li>
  );
}

function Faq() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const faqItems = [
    {
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc?',
      answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit?',
      answer: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.',
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
      answer: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.',
    },
    {
      question: 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
      answer: 'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.',
    },
  ];

  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (id) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="faq-list">
          <ul id="faq-list">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                id={`faq-item-${index}`}
                {...item}
                isOpen={openAccordions[`faq-item-${index}`]}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;
