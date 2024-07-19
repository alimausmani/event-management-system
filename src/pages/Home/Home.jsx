import React from 'react';
import './Home.css';

const Home = () => {
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
                            <button className="about-button" type="button">ABOUT US</button>
                            <button className="get-started-button" type="button">GET STARTED!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-container">
            <div className="second-content">
                <h2 className="title-intro">Tiitle Intro</h2>
                <h1>About Us</h1>
                <p>
                    Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    eali takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p>
                    Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    eali takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <button className="call-to-action">Call to Action</button>
            </div>
            <div className="about-us-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I5Hy8J6qoCukImq2YuuPHqtpuoC-MGp87chvNa3Tq1FiPzbgXkKktiNEttHr9uGVCxQ&usqp=CAU" alt="event" />
            </div>
        </div>
        </>
    );
};

export default Home;
