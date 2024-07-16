import React, { useState, useEffect } from 'react';
import '../styles/TestimonialsSection.css';

const testimonials = [
  {
    quote: "Imagine Seniorcare Inc. provided exceptional care for my mother. The caregivers were kind, professional, and always attentive to her needs. I can't thank them enough for their support and compassion.",
    author: "Sarah T.",
    description: "Daughter of a Client",
    image: require('../images/image6.jpg') // Ensure the path is correct
  },
  {
    quote: "The team at Imagine Seniorcare Inc. made a huge difference in my father's life. Their dedication and care gave us peace of mind knowing he was in good hands. We are incredibly grateful for their services.",
    author: "Michael B.",
    description: "Son of a Client",
    image: require('../images/image5.jpg') // Ensure the path is correct
  },
  {
    quote: "Choosing Imagine Seniorcare Inc. was the best decision for our family. The staff is friendly, knowledgeable, and genuinely cares about their clients. They have been a wonderful support system for us.",
    author: "Emily R.",
    description: "Granddaughter of a Client",
    image: require('../images/image4.jpg') // Ensure the path is correct
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section">
      <h2>Customer Testimonials</h2>
      <p>Hear back from our valued clients</p>
      <div className="testimonials-slider">
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === currentIndex ? 'active' : ''
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div>
                  <h3>{testimonial.author}</h3>
                  <p>{testimonial.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
