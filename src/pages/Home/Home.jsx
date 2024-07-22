import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    const handleAboutUsClick = () => {
        navigate('/about');
    };

    const handleEventsClick =() => {
        navigate('/events')
    }

    const handleGalleryClick =() => {
        navigate('/gallery')
    }

    return (
        <>
            <div className="home-container">
                <div className="background-image">
                    <div className="overlay">
                        <h1 className="main-title">One Stop Event Planner</h1>
                        <h3 className="sub-title">Expert Event Planning</h3>
                        <p className="tagline">Every Event Should Be Perfect</p>
                        <p className="description">
                            We offer a comprehensive event planning service, ensuring every detail is perfect for your special occasion. From weddings to corporate events, we handle it all.
                        </p>
                        <div className="button-container">
                            <button className="about-button" type="button" onClick={handleAboutUsClick }>ABOUT US</button>
                            <button className="get-started-button" type="button" onClick={handleEventsClick}>GET EVENTS!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-container">
            <div className="second-content">
                {/* <h2 className="title-intro">Tiit</h2> */}
                <h1>About Our Company</h1>
                <h2>Our Story</h2>
                <p>
                    Founded in 2021, Alphan Events has grown from a small event planning startup 
                    to a leading innovator in the event management industry. Our journey began with 
                    a simple yet ambitious goal: to create memorable and seamless events that exceed 
                    our clients' expectations. Over the years, we have expanded our horizons, continuously 
                    evolving and adapting to the ever-changing landscape of event organization.
                </p>
                <h2>Mission and Vision</h2>
                <p>
                    Our mission is to deliver exceptional events that inspire, engage, 
                    and leave a lasting impression. We envision a future where every event, 
                    big or small, is crafted with precision, creativity, and excellence. At 
                    Alphan Events, we believe in innovation, quality, and client satisfaction, 
                    and these principles guide every aspect of our work.
                </p>
                <button className="contact-us" onClick={handleContactClick}>Contact Us</button>
            </div>
            <div className="about-us-image">
                <img src="https://media-api.xogrp.com/images/67c93ddb-5b75-432a-ad51-8dcc01f9cb9f~rs_768.h-cr_160.0.2827.2000" alt="event" />
            </div>
        </div>
        <div className="featured-container">
            <div className="featured-content">
                <h2>See what we are best at</h2>
                <p>
                    Use text and images to tell your company's story. Explain what makes your product or service extraordinary.
                </p>
                <button className="buy-now-button" onClick={handleGalleryClick}>See Our Gallery</button>
            </div>
        </div>
        </>
    );
};


// Alima Usmani
export default Home;
