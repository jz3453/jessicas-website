import React, { useContext, useEffect, useState } from 'react';
import { DisplayContext } from '../../../App';
import './Experiences.css';
import '../../general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { work } from '../../constants/Work';


const Flashcard = ({ job }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      {
        !flip ? (
          <div className='front'>
            <div className='card-header'>
              <div className='card-title'>
                {job.company}
              </div>
              <div className='card-date'>
                {job.date}
              </div>
            </div>
            <div className='card-subtitle'>
              {job.position}
            </div>
            <div className='card-list-container'>
              <ul className='card-list'>
                {
                  job.bullets.map((bullet) => {
                    return (
                      <li className='card-list-bullet'>{bullet}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='card-footer'>
              Click to Flip!
            </div>
          </div>
        ) : (
          <div className='back'>
            <div className='card-header'>
              <div className='card-title flip'>
                What I Learned & Takeaways
              </div>
            </div>
            <div className='card-list-container'>
              <ul className='card-list'>
                {
                  job.takeaways.map((takeaway) => {
                    return (
                      <li className='card-list-bullet flip'>{takeaway}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  );
}
export default Flashcard;