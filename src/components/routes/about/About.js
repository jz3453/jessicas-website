import React, { useContext, useEffect, useState } from 'react';
import { DisplayContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import { Navigation, Pagination, Mousewheel} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './About.css';
import '../../general.css';
import { hobbies } from '../../constants/Hobbies';
import { highlights } from '../../constants/Highlights';

const HighlightsReel = () => {
  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);

  return (
    <div className='highlights-container'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={narrowDisplay ? "swiper-reel narrow" : "swiper-reel"}
      >
        {
          highlights.map((highlight) => (
            <SwiperSlide key={highlight.id}>
              <div className={narrowDisplay ? "reel-slide narrow" : 'reel-slide'}>
                {highlight.image}
                <div className='reel-slide-text'>
                  <div className='reel-slide-title'>
                  {highlight.title}
                  </div>
                  <div className='reel-slide-caption'>
                    {highlight.caption}
                  </div>
                  <div className='reel-slide-buttons'>
                    {highlight.icons}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className='source-container'>
        <div className='source-text'>Built using Swiper.</div>
        <IconButton href='https://codesandbox.io/p/sandbox/lmvldw?file=/src/App.jsx'>
          <FontAwesomeIcon className='source-code-icon' icon="fa-solid fa-code" size="2xs" />
        </IconButton>
      </div>
    </div>
  );
}

const CardSlider = () => {
  return (
    <div className='slider-container'>
      <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {hobbies.map((hobby) => (
          <SwiperSlide key={hobby.id}>
            <div className='card-icon'>
                {hobby.icon}
            </div>
            <div className='card-contents'>
              <div className='card-title'>{hobby.hobby}</div>
              <div className='card-description'>{hobby.description}</div>
            </div>
          </SwiperSlide>
      ))}
    </Swiper>
    <div className='source-container'>
        <div className='source-text'>Built using Swiper.</div>
        <IconButton href='https://codesandbox.io/p/sandbox/d2yx72?file=/src/App.jsx'>
          <FontAwesomeIcon className='source-code-icon' icon="fa-solid fa-code" size="2xs" />
        </IconButton>
      </div>
    </div>
  );
}

function About() {
  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);

  return (
    <div className={narrowDisplay ? 'page-full': 'page'}>
      <div className='page-contents'>
        <div className='section'>
          <div className='title'>
            Hello there!
          </div>
          <div className='page-text'>
            I am a third-year computer science student minoring in statistics at Columbia's School of Engineering and Applied Science. 
            I'm originally from Port Lavaca, TX, and I just moved to Houston earlier this year.
          </div>
          <div className='page-text-break' />
          <div className='page-text'>
            At Columbia, I'm a TA for the Data Structures course, and I'm also the Publicity & Branding Director of DivHacks, an annual hackathon organized by WiCS.
            You can check us out at <a href='https://www.columbiadivhacks.com' target='_blank' rel='noreferrer'>www.columbiadivhacks.com</a>!
          </div>
        </div>
        <div className='section'>
          <div className='subtitle'>
            Featured Highlights
          </div>
          {HighlightsReel()}
        </div>
        <div className='section'>
          <div className='subtitle'>
            Coding Background
          </div>
          <div className='page-text'>
            I've been coding since freshman year of high school, and my career goal is to become a front-end developer.
          </div>
          <div className='page-text'>
            I have the most coding experience with <strong className="bold-text">Java</strong>, <strong className="bold-text">Javascript</strong>, <strong className="bold-text">HTML</strong>, and <strong className="bold-text">CSS</strong>, but I've also worked with <strong className="bold-text">Python</strong>, <strong className="bold-text">C</strong>, <strong className="bold-text">C++</strong>, and <strong className="bold-text">SQL</strong>.
            I also have experience with technologies like <strong className="bold-text">AWS Lambda</strong>,  <strong className="bold-text">DynamoDB</strong>, <strong className="bold-text">API Gateway</strong>, and <strong className="bold-text">MongoDB</strong>.
          </div>
          <div className='page-text-break' />
          <div className='page-text'>
            This summer, I interned at ShipStation Auctane and worked extensively with <strong className="bold-text">React</strong>.
            Initially, we worked on old-style class-based components and their lifecycles on <strong className="bold-text">React 0.14</strong>, and we also grappled with outdated versions of libraries like Bootstrap due to our <em>ancient</em> React version.
          </div>
          <div className='page-text'>
            As the summer went on, we progressed into building modern functional components using hooks and other current methods on <strong className="bold-text">React 16.8</strong>. Though it was a slightly confusing and sometimes frustrating transition, it was a really cool journey to see how React has evolved over time.
          </div>
          <div className='page-text'>
            We also had tons of opportunities to interact our mentors, other engineers, and our direct stakeholders, and from that I learned a lot about <strong className="highlight-text">being a more thoughtful designer, incorporating feedback more effectively, and using better code practices.</strong>
          </div>
        </div>
        <div className='section'>
          <div className='subtitle'>
            Hobbies & Interests
          </div>
          <div className='page-text'>
            School, extracurriculars, and work take up a lot of my time, but I still <i>try</i> to make time to do things I like.
          </div>
          <br />
          {CardSlider()}
        </div>
      </div>
    </div>
  );
}

export default About;