import React, { useContext, useEffect, useState } from 'react';
import { DisplayContext } from '../../../App';
import './Contact.css';
import '../../general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';

function Contact() {
  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);

  return (
    <div className={narrowDisplay ? 'contact-page-full': 'contact-page'}>
      <div className='contact-page-contents'>
        <div className='contact-title'>
          Contact Info
        </div>
        <div className='contact-buttons'>
          <IconButton href='https://www.linkedin.com/in/jessica-zhang-000556213/'>
            <FontAwesomeIcon className='contact-icon' icon="fa-brands fa-linkedin" />
          </IconButton>
          <IconButton href='mailto:jz3453@columbia.com, jessdoesit2021@gmail.com'>
            <FontAwesomeIcon className='contact-icon' icon="fa-solid fa-envelope" />
          </IconButton>
          <IconButton href='https://github.com/jz3453'>
            <FontAwesomeIcon className='contact-icon' icon="fa-brands fa-github" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default Contact;