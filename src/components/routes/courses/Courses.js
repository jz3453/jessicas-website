import React, { useContext, useEffect, useState } from 'react';
import { DisplayContext } from '../../../App';
import { Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Courses.css';
import '../../general.css';
import { semesters } from '../../constants/Classes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Courses() {
  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);

  return (
    <div className={narrowDisplay ? 'page-full': 'page'}>
      <div className='page-contents'>
        <div className='title'>
          Coursework
        </div>
        <div className='courses-container'>
        {
          semesters.map((semester) => {
            return (
              <div className='semester-section' key={semester.semester}>
                <Accordion className='course-list'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <div className='semester-title'>{semester.semester}</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    {semester.honors && <div className='honors'>
                      Honors: Dean's List
                      <FontAwesomeIcon icon="fa-solid fa-star" size="sm" />
                    </div>}
                    <div className='course-list'>
                      {
                        semester.courses.map((course) => {
                          return (
                            <div className='course' key={course['course-name']}>
                              <div className='course-name'>
                                {course['course-name']}
                              </div>
                              <div className='course-description'>
                                <div className='course-subtext highlight'>
                                  {course['course-number']}
                                </div>
                                <div className='course-subtext'>
                                  {course['professor']}
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            )
          })
        }
        <div className='source-container'>
          <div className='source-text'>Built using MUI Accordion.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;