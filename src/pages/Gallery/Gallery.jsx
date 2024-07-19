import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
    <div className="gallery-new-item first-item">
        <img src="/img1.jpg" alt="img1" className="img1"/>
        <p className='p1'>There are dreamer; and there are planners; the planners make their dreams come true</p>
        <p className='para'>SELECT YOUR EXPERIENCE</p>
      </div>
      <div className="gallery-item">
        <img src="/img2.jpg" alt="img2" className="img2" />
        <p className='p2'>Events Connect People Breed Innovation 
        Build Communities Events Spark "Changes"</p>
      </div>
      <div className="gallery-item">
        <img src="/img3.jpeg" alt="img3"  className="img3"/>
        <p className='p3'>Making your special day look like a <br></br>DREAM</p>
      </div>
      <div className="gallery-item">
        <img src="/img4.jpg" alt="img4"  className="img4"/>
        <p className='p4'>Let's the party begins</p>
      </div>
      <div className="gallery-item">
        <img src="/img5.jpg" alt="img5"  className="img5"/>
        <p className='p5'>REPEAT THE DREAM PARTY</p>
      </div>
      <div className="gallery-item">
        <img src="/img6.jpg" alt="img6" className="img6" />
        <p className='p6'>Let's the good time roll!</p>
      </div>
      <div className="gallery-item">
        <img src="/img7.jpeg" alt="img7"  className="img7"/>
        <p className='p7'>Life is made by some little beautiful<br></br> moment like this....</p>
      </div>
      
      <div className="gallery-new-item last-item">
        <img src="/img12.jpeg" alt="img1" className="img11"/>
        <p className='p11'>ABOUT OUR PLANNING PROCESS</p>
      </div>
    </div>
  );
};

export default Gallery;


