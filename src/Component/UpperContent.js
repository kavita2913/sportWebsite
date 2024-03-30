import React from 'react';
import './uppercontent.css';
import img from '../Images/pic1.png';
import mask from '../Images/Mask.png';
import img2 from '../Images/pic2.png';
import mask1 from '../Images/Mask.png';
import sportgoods from '../Images/sportgoods.png';
import Frame from '../Images/Frame.png';

const UpperContent = ({ theme }) => { 
  // console.log(theme);
  return (
    <div className={`upcontent ${theme}`}>
      <div className='title'>Sports</div>
      <div className='players'>
        <div className='img'>
          <img src={img} alt="Image" />
          <span> Sacramento River Cats</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>40 Events</li></ul>
              <ul>Sport<li>Baseball</li></ul>
            </div>
          </div>
        </div>
        <div className='img'><img src={mask} alt="Image" />
          <span>Las Vegas Aviators</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>40 Events</li></ul>
              <ul>Sport<li>Baseball</li></ul>
            </div>
          </div>
        </div>
        <div className='img'><img src={img2} alt="Image" />
          <span>New Jersey Devils</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>28 Events</li></ul>
              <ul>Sport<li>Ice Hockey</li></ul>
            </div>
          </div>
        </div>
        <div className='img'><img src={mask1} alt="Image" />
          <span>Las Vegas Aviators</span>
          <div className='sportEvent'>
            <div className='events'>
              <ul>Top Events<li>28 Events</li></ul>
              <ul>Sport<li>Baseball</li></ul>
            </div>
          </div>
        </div>
        <div className='img' style={{ position: 'relative', display: 'inline-block' }}>
    <img src={sportgoods} alt="Sport Goods" />
    <img src={Frame} alt="Frame" style={{ position: 'absolute', top: 0,  right: 0 }} />

          <div className='advert'>Advertisement title
            <text className='advertPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>    
          </div>
        </div>
      </div>
      <div className="button-container flex items-center justify-center p-50">
  <button>See More</button>
      </div>
    </div>
  );
}

export default UpperContent;
