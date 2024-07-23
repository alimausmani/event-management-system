import React from 'react';
import "./About.css";

const reviews = [
  {
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/08/01/43/09/1000_F_801430964_bqBF9TlN5g9iZ34PBTpaaXxWF3sComuY.jpg',
    name: "Martha Jonas",
    site: "FThemes.net",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    imageUrl: 'https://as1.ftcdn.net/v2/jpg/06/49/35/22/1000_F_649352204_QXvDyY1AIwPh3QiY5RaWnoT82Q1Yab96.jpg',
    name: "Martha Jonas",
    site: "FThemes.net",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/09/92/64/1000_F_709926427_Dnw3NchoOdE6IwtJj72JZ4t9hc6lbndF.jpg',
    name: "Martha Jonas",
    site: "FThemes.net",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

const questions = [
  {
    title: "What is the dress code for the event?",
    content: "The dress code is business casual. We encourage guests to dress comfortably but professionally."
  },
  {
    title: "Will meals be provided?",
    content: "Yes, breakfast, lunch, and dinner will be provided on both days of the event. We also offer vegetarian and vegan options."
  },
  {
    title: "Is parking available at the venue?",
    content: "Yes, there is ample parking available at the venue. Parking is free for all event attendees."
  },
  {
    title: "How can I get a copy of the event schedule?",
    content: "The event schedule will be emailed to all registered attendees one week before the event. You can also download it from our website."
  },
  {
    title: "Can I bring a guest to the event?",
    content:  "Yes, you can bring a guest. Please make sure to register your guest on our event registration page to ensure they have a name badge and meal tickets."
  },
  {
    title: "What is the refund policy?",
    content: "We offer a full refund if you cancel at least two weeks before the event. No refunds will be issued for cancellations made within two weeks of the event."

  }
];

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
      </div>
      <div className="reviews-section">
        <h1>Our Past Event Reviews</h1>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="reviewer">
                <img src={review.imageUrl} alt="Reviewer" />
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <p>{review.site}</p>
                </div>
              </div>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
      <div className="questions-section">
        <h1>Got Questions About Our Event?</h1>
        <div className="questions">
          {questions.map((question, index) => (
            <div className="question-card" key={index}>
              <h3>{question.title}</h3>
              <p>{question.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="event-managers">
      <h1>Meet Our Team</h1>
      <div className="managers">
        <div className="manager" id="manager1">
        <img src='Aarti.jpeg' alt="manager1" className="manager1" />
        <p>Name:-Aarti Biradar<br></br>Contact:-8660604678<br></br>Email-id:-aartibiradar21@navgurukul.org</p>
        </div>
        <div className="manager" id="manager2">
        <img src='aalu.jpeg' alt="manager2" className="manager2" />
        <p>Name:-Alima Usmani<br></br>Contact:-7388498327<br></br>Email-id:-alimausmani21@navgurukul.org</p>
  
        </div>
      </div>
      </div>
    </>
  );
};

export default About;

