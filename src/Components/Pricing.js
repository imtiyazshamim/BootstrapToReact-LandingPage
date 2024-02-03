import React from 'react';
import '../assets/css/Pricing.css';

const PricingPlan = ({ planName, price, features, delay, featured }) => (
  <div className={`col-lg-4 ${delay ? `mt-4 mt-lg-0` : ''}`} data-aos="fade-up" data-aos-delay={delay}>
    <div className={`box ${featured ? 'featured' : ''}`}>
      <h3>{planName}</h3>
      <h4><sup>$</sup>{price}<span> per month</span></h4>
      <ul>
        {features.map((feature, index) => 
          <li key={index} className={feature.available ? "" : "na"}>
            <i className={`bx ${feature.available ? 'bx-check' : 'bx-x'}`}></i> 
            <span>{feature.text}</span>
          </li>
        )}
      </ul>
      <button className="buy-btn">Get Started</button>
    </div>
  </div>
);

function Pricing() {
  const pricingPlans = [
    {
      planName: "Free Plan",
      price: "0",
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: false },
        { text: "Massa ultricies mi quis hendrerit", available: false },
      ],
      delay: "100"
    },
    {
      planName: "Business Plan",
      price: "29",
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: true },
        { text: "Massa ultricies mi quis hendrerit", available: true },
      ],
      delay: "200",
      featured: true,
    },
    {
      planName: "Developer Plan",
      price: "49",
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: true },
        { text: "Massa ultricies mi quis hendrerit", available: true },
      ],
      delay: "300"
    },
    // ... Add other plans here if needed
  ];

  return (
    <div>
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => 
              <PricingPlan key={index} {...plan} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
