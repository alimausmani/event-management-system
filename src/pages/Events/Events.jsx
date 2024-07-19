import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Event.css';

const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const events = [
        {
            title: 'Marriage',
            date: 'July 20, 2024',
            time: '10:00 AM',
            location: '1234 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/07/78/65/55/1000_F_778655567_XrrPPEolxJGeAIoTgzl5W3WDR6fXGRm5.jpg',
            type: 'Ceremony'
        },
        {
            title: 'Birthday',
            date: 'July 21, 2024',
            time: '11:00 AM',
            location: '5678 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/36/58/44/1000_F_736584404_OfYqlv4i6b4W4hqK058mNLZQtRLTqNXp.jpg',
            type: 'Party'
        },
        {
            title: 'Party',
            date: 'July 22, 2024',
            time: '12:00 PM',
            location: '9101 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/53/53/12/1000_F_753531263_PIewvDMeJ9R71xECVxaxu7hmTC3PWuLN.jpg',
            type: 'Gathering'
        },
        {
            title: 'Engagement',
            date: 'July 23, 2024',
            time: '01:00 PM',
            location: '1121 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/08/74/64/12/1000_F_874641205_j2nF9kmYNvodGtRQEK0WtfKJC2KYaAAb.jpg',
            type: 'Ceremony'
        },
        {
            title: 'Baby Shower',
            date: 'July 24, 2024',
            time: '02:00 PM',
            location: '1314 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/07/53/42/31/1000_F_753423193_N2veY0EkDHqdZdxyD5uMXtSsn00kc4OA.jpg',
            type: 'Celebration'
        },
        {
            title: 'Anniversary',
            date: 'July 26, 2024',
            time: '04:00 PM',
            location: '1718 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/08/46/43/43/1000_F_846434377_ax2PBAWWeBR2QnnGXtrmXckgumz2ty6I.jpg',
            type: 'Celebration'
        },
        {
            title: 'Bridal Shower',
            date: 'July 25, 2024',
            time: '03:00 PM',
            location: '1516 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/08/19/20/40/1000_F_819204022_7X5z4UtggR5TKrypGgLMdBeHVUwjbYo7.jpg',
            type: 'Celebration'
        }, {
            title: 'Conference',
            date: 'July 28, 2024',
            time: '06:00 PM',
            location: '2122 Example St. Miami, FL',
            extraInfo: 'Extra info can go here to catch anything else',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/62/67/24/1000_F_762672427_cCC6JS8lDWlPOq9JGY7wfrgcsubRCyV4.jpg',
            type: 'Business'
        },
        //   {
        //     title: 'Workshop',
        //     date: 'July 29, 2024',
        //     time: '07:00 PM',
        //     location: '2324 Example St. Miami, FL',
        //     extraInfo: 'Extra info can go here to catch anything else',
        //     imageUrl: 'https://as1.ftcdn.net/v2/jpg/08/44/68/44/1000_F_844684490_dXvvWjeFIfUJlwWrwVfN4sF2Q72m4pNp.jpg',
        //     type: 'Education'
        //   },
        //   {
        //     title: 'Seminar',
        //     date: 'July 30, 2024',
        //     time: '08:00 PM',
        //     location: '2526 Example St. Miami, FL',
        //     extraInfo: 'Extra info can go here to catch anything else',
        //     imageUrl: 'https://via.placeholder.com/300x150',
        //     type: 'Education'
        //   },
        //   {
        //     title: 'Meetup',
        //     date: 'July 31, 2024',
        //     time: '09:00 PM',
        //     location: '2728 Example St. Miami, FL',
        //     extraInfo: 'Extra info can go here to catch anything else',
        //     imageUrl: 'https://via.placeholder.com/300x150',
        //     type: 'Networking'
        //   }, 
        //   {
        //     title: 'Festival Event',
        //     date: 'July 31, 2024',
        //     time: '09:00 PM',
        //     location: '2728 Example St. Miami, FL',
        //     extraInfo: 'Extra info can go here to catch anything else',
        //     imageUrl: 'https://via.placeholder.com/300x150',
        //     type: 'Networking'
        //   }
    ];


    return (
        <div className="event-container">
            <h1>Events Page</h1>
            <p>Welcome to the Events page!</p>
            <Slider {...settings}>
                <div>
                    <img src="https://as2.ftcdn.net/v2/jpg/03/06/19/79/1000_F_306197974_F4jkDKmTkTttXd9ocRzSzTMAms5AwoI1.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://as2.ftcdn.net/v2/jpg/08/14/01/57/1000_F_814015744_Ub64Jd660upKVZZII4lqOLxAlP0ucD0i.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://as2.ftcdn.net/v2/jpg/07/68/89/67/1000_F_768896794_eIM5juExlrIxerta3ZCeKYWFTWOgviyr.jpg" alt="Slide 3" />
                </div>
                <img src="https://as1.ftcdn.net/v2/jpg/08/10/19/48/1000_F_810194864_tZzITcTcbIbTtJ67OpRRy3c97g6M7mZf.jpg" alt="Slide 4" />
                <div>
                    <img src="https://as2.ftcdn.net/v2/jpg/07/15/57/27/1000_F_715572753_I9BqfXuwJpJFzQT6x0maHEwXJ5WdN5VA.jpg" alt="Slide 5" />
                </div>
            </Slider>
            <div className="event-list">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <img src={event.imageUrl} alt={`${event.title} image`} className="event-card__image" />
                        <div className="event-card__info">
                            <h3 className="event-card__type">{event.type}</h3>
                            <h2 className="event-card__title">{event.title}</h2>
                            <p className="event-card__description">
                                When an unknown printer took a galley offer type year anddey scrambled
                            </p>
                            <div className="event-card__details">
                                <p><span>Date:</span> {event.date}</p>
                                <p><span>Time:</span> {event.time}</p>
                                <p><span>Location:</span> {event.location}</p>
                                <p><span>Info:</span> {event.extraInfo}</p>
                            </div>
                            <button className="event-card__button">Book Event</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pink-section">
                <h2>SEE WHAT WE ARE BEST AT</h2>
                <p>Use text and images to tell your company’s story. Explain what makes your product or service extraordinary.</p>
                <button className="cta-button">GET STARTED</button>
            </div>
        </div>
    );
};

export default Events;