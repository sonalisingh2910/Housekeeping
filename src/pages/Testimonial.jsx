import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'inodre, India',
      text: 'I found the perfect housekeeper for my home through this website. The process was simple and easy to navigate, and I was able to find someone who met all of my requirements.'
    },
    {
      name: 'Anjali Singh',
      location: 'indore, India',
      text: 'I was skeptical at first about hiring a housekeeper online, but this website made the process so much easier. I was able to find someone who was a great fit for my family and our needs.'
    },
    {
      name: 'Kiran Patel',
      location: 'indore , India',
      text: 'I had been looking for a reliable and trustworthy housekeeper for a while, and this website helped me find just what I was looking for. The platform is user-friendly and the support team is very helpful.'
    }
  ];

  const testimonialCards = testimonials.map((testimonial, index) => (
    <div className="testimonial-card" key={index}>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-details">
        <p className="testimonial-name">{testimonial.name}</p>
        <p className="testimonial-location">{testimonial.location}</p>
      </div>
    </div>
  ));

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-cards">
        {testimonialCards}
      </div>
    </div>
  );
}

export default Testimonial;
