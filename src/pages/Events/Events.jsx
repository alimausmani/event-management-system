
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from './Modal';
import axios from 'axios';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [foamData, setFamData] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const postData = async (e) => {
    try {
      e.preventDefault();
      let str = "";
      for (let x in foamData) {
        str += `${x.toUpperCase()} : ${foamData[x]} \n`;
      }
      const response = await axios.post(
        "https://discord.com/api/webhooks/1264668555857625170/mF0Nn9s_Um_-kljyhtkfP9if7pxw-otcVO0FD4R0KhYl9tNGALMwpcpeznDN7GT82C89",

        {
          content: str,
        }
      );
      console.log(response);
      window.location.reload();
    } catch (e) {
      console.log(e)
    }
  }
  const handlChange = (e) => {
    setFamData({ ...foamData, [e.target.name]: e.target.value });
  }


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
    },
    {
      title: 'Conference',
      date: 'July 28, 2024',
      time: '06:00 PM',
      location: '2122 Example St. Miami, FL',
      extraInfo: 'Extra info can go here to catch anything else',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/62/67/24/1000_F_762672427_cCC6JS8lDWlPOq9JGY7wfrgcsubRCyV4.jpg',
      type: 'Business'
    },
  ];


  const handleBookEventClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <div style={{
      textAlign: 'center',
      margin: '0',
    }}>
      <h1>Events Page</h1>
      <p style={{ color: '#ff69b4', fontWeight: 700, fontSize: '30px', fontFamily: "monospace" }}>Welcome to the Events !</p>
      <Slider {...settings} style={{
        display: 'block',
        width: '95%',
        height: '600px',
        margin: 'auto',
      }}>
        <div>
          <img src="https://as2.ftcdn.net/v2/jpg/03/06/19/79/1000_F_306197974_F4jkDKmTkTttXd9ocRzSzTMAms5AwoI1.jpg" alt="Slide 1" style={{
            display: 'block',
            width: '100%',
            height: '600px',
            margin: '0',
          }} />
        </div>
        <div>
          <img src="https://as2.ftcdn.net/v2/jpg/08/14/01/57/1000_F_814015744_Ub64Jd660upKVZZII4lqOLxAlP0ucD0i.jpg" alt="Slide 2" style={{
            display: 'block',
            width: '100%',
            height: '600px',
            margin: '0',
          }} />
        </div>
        <div>
          <img src="https://as2.ftcdn.net/v2/jpg/07/68/89/67/1000_F_768896794_eIM5juExlrIxerta3ZCeKYWFTWOgviyr.jpg" alt="Slide 3" style={{
            display: 'block',
            width: '100%',
            height: '600px',
            margin: '0',
          }} />
        </div>
        <div>
          <img src="https://as1.ftcdn.net/v2/jpg/08/10/19/48/1000_F_810194864_tZzITcTcbIbTtJ67OpRRy3c97g6M7mZf.jpg" alt="Slide 4" style={{
            display: 'block',
            width: '100%',
            height: '600px',
            margin: '0',
          }} />
        </div>
        <div>
          <img src="https://as2.ftcdn.net/v2/jpg/07/15/57/27/1000_F_715572753_I9BqfXuwJpJFzQT6x0maHEwXJ5WdN5VA.jpg" alt="Slide 5" style={{
            display: 'block',
            width: '100%',
            height: '600px',
            margin: '0',
          }} />
        </div>
      </Slider>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '16px',
        marginTop: '50px',
      }}>
        {events.map((event, index) => (
          <div style={{
            // border: '1px solid red',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px',
            textAlign: 'left',
            width: '400px',
            boxShadow: '0 4px 8px #ff69b4',
          }} key={index}>
            <img src={event.imageUrl} alt={`${event.title} image`} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }} />
            <div style={{
              padding: '0px',
              marginTop: 0
              , paddingBottom: '16px'
              , paddingLeft: '10px',
              paddingRight: '10px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 style={{
                  fontSize: '1.5em',
                  margin: '0',
                  color: '#ff69b4',
                }}>{event.title}</h2>
                <h3 style={{
                  backgroundColor: 'white',
                  color: '#ff69b4',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',

                  border: '1px solid #ff69b4'
                }}>{event.type}</h3>
              </div>
              <p style={{
                color: '#555',
                margin: '8px 0',
              }}>
                When an unknown printer took a galley offer type year anddey scrambled
              </p>
              <div style={{
                fontSize: '0.9em',
                color: 'hsl(0, 6%, 14%)',
              }}>
                <p style={{
                  margin: '4px 0',
                }}><span style={{ fontWeight: 'bold' }}>Date:</span> {event.date}</p>
                <p style={{
                  margin: '4px 0',
                }}><span style={{ fontWeight: 'bold' }}>Time:</span> {event.time}</p>
                <p style={{
                  margin: '4px 0',
                }}><span style={{ fontWeight: 'bold' }}>Location:</span> {event.location}</p>
                <p style={{
                  margin: '4px 0',
                }}><span style={{ fontWeight: 'bold' }}>Info:</span> {event.extraInfo}</p>
              </div>
              <button
                style={{
                  backgroundColor: '#ff69b4',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '16px',
                  fontWeight: 700
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff3385')}
                onClick={handleBookEventClick}
              >
                Book Event
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        // backgroundColor: ' #737373',
        background: "url('https://images.venuebookingz.com/28204-1685963220-wm-iskcon_house_3.jpg') no-repeat center center, #737373",
        backgroundSize: 'cover',
        color: 'black',
        padding: '40px 20px',
        borderRadius:'50px',
        // fontSize:'2.1em'
      }} >
        <h2 style={{
          margin: '0',
          fontSize: '2.5em',
          color: ' #e60099',
        }}>SEE WHAT WE ARE BEST AT</h2>
        <p style={{
          margin: '20px 0',
          fontSize: '2.2em',
        }}>Use text and images to tell your company’s story. Explain what makes your product or service extraordinary.</p>
        <button
          style={{
            backgroundColor: 'white',
            color: '#FF70AB',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1.2em',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff3385')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
        >
          GET STARTED
        </button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>Registration Form</h2>
        <form onSubmit={postData}>
          <div className="registration-group" style={{ textAlign: 'left' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={handlChange} id="name" name="name" required />
          </div>
          <div className="registration-group" style={{ textAlign: 'left' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={handlChange} id="email" name="email" required />
          </div>
          <div className="registration-group" style={{ textAlign: 'left', marginBottom: '20px', marginRight: '30px' }}>
            <label htmlFor="phone">Phone:</label> <br></br><input type="tel" id="phone" name="phone" onChange={handlChange} required style={{ width: '100%', height: '25px' }} />
          </div>
          <div className="registration-group" style={{ textAlign: 'left' }}>
            <label htmlFor="event">Events:</label><br></br>
            <select style={{ width: '100%', height: '25px', marginTop: '10px', marginBottom: '20px' }} id="event" name="event" onChange={handlChange} required>
              {events.map((event, index) => (
                <option key={index} value={event.title}>{event.title}</option>
              ))}
            </select>
          </div>
          <button type='submit' >Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default Events;



