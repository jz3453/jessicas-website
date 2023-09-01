import React, { useContext, useEffect, useState } from 'react';
import { DisplayContext } from '../../../App';
import { Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Experiences.css';
import '../../general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { work } from '../../constants/Work';
import Flashcard from './Flashcard';

function Experiences() {
  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);

  return (
    <div className={narrowDisplay ? 'page-full': 'page'}>
      <div className='page-contents'>
        <div className='title'>
          Work Experience
        </div>
        <div className='card-container'>
          {
            work.map((job) => {
              return (
                <Flashcard job={job} />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
export default Experiences;