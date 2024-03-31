import React from 'react'
import './lowercontent.css';
import Ticket_Mockup from '../Images/Ticket_Mockup.png';
import unnamed from '../Images/unnamed.png';
import arrow from '../Images/arrow.png'
import rightArrow from '../Images/rightArrow.png'


const LowerContent = (theme) => {
    return (
        <div className={`lowerContent ${theme}`}>
            <img src={arrow} />
            <div className='imageContent'>
                <div className='content'>
                    Collection Spotlight
                </div>
                <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                <div className='playersImages'>
                    <div className='groupImages'>
                        <img src={Ticket_Mockup} />
                        {/* ------------------------- */}
                        <span className="team">Las Vegas Aviators</span>
                        <div className="schedule">
                            <div className='dateTime'>Oct 15 | Sun | 4:30 PM</div>
                            <div className='lasVegas'>Las Vegas Ballpark, Las Vegas, Nevada</div>
                        </div>
                        <button className='CollectionButton'>Take Flight Collection</button>
                    </div>
                    <div className='groupImages'><img src={unnamed} />
                        <span className="team">Sacramento River Cats</span>

                        <div className="schedule">
                            <div className='dateTime'>Oct 15 | Sun | 4:30 PM</div>
                            <div className='lasVegas'>Sutter Health Park, Sacramento, California</div>
                        </div>
                        <button className='CollectionButton'>Orange Collection</button>
                    </div>
                    <div className='groupImages'><img src={Ticket_Mockup} />
                        <span className="team">Las Vegas Aviators</span>
                        <div className="schedule">
                            <div className='dateTime'>Oct 15 | Sun | 4:30 PM</div>
                            <div className='lasVegas'>Las Vegas Ballpark, Las Vegas, Nevada</div>
                        </div>
                        <button className='CollectionButton'>Take Flight Collection</button>
                    </div>

                </div>
            </div>
            <img src={rightArrow} />
        </div>
    )
}

export default LowerContent;
