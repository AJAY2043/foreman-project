import React, { useState } from 'react';
import './FaqSupport.css';
import { Link } from 'react-router-dom';
// import down_arrow from '../Assets/dropdown_icon.png';

const FaqSupport = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I find the right professional?',
      answer: 'You can search for professionals by category and location. Our platform helps you connect with verified and experienced professionals in your area.'
    },
    {
      question: 'How does the booking process work?',
      answer: 'Once you find a professional, you can view their profile and contact them directly to discuss your needs. You can also book their services through our platform.'
    },
    {
      question: 'Is there any cost to use this service?',
      answer: 'Our platform is free to use for customers. Professionals may have their own service fees, which will be communicated during the booking process.'
    },
    {
      question: 'How can I get support if I have an issue?',
      answer: 'If you have any issues or need support, you can contact our customer service team through the "Support" section. We’re here to help 24/7.'
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-support">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </h3>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <div className="support-section">
        <h2 className="support-title">Need More Help?</h2>
        <p className="support-description">
          Our support team is available 24/7. If you have any questions or issues, feel free to contact us.
        </p>
        <Link to='/contactus'><button className="support-button">Contact Support</button></Link>
      </div>
    </section>
  );
};

export default FaqSupport;
