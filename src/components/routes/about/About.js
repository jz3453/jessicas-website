import React, { useContext, useEffect, useState } from 'react';
import { DisplayContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Tooltip } from '@mui/material';
import { Navigation, Pagination, Mousewheel} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './About.css';
import '../../general.css';
// import { hobbies } from '../../constants/Hobbies';
// import { highlights } from '../../constants/Highlights';

// const HighlightsReel = () => {
//   return (
//     <div className='highlights-container'>
//       <Swiper
//         direction={'vertical'}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="swiper-reel"
//       >
//         {highlights.map((highlight) => (
//           <SwiperSlide key={highlight.id}>
//             <div className='reel-slide'>
//               {highlight.image}
//               <div className='reel-slide-text'>
//                 <div className='reel-slide-title'>
//                   {highlight.title}
//                 </div>
//                 <div className='reel-slide-caption'>
//                   {highlight.caption}
//                 </div>
//                 <div className='reel-slide-buttons'>
//                   {highlight.icons}
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//       ))}
//       </Swiper>
//       <div className='source-container'>
//         <div className='source-text'>Built using Swiper.</div>
//         <IconButton href='https://codesandbox.io/p/sandbox/lmvldw?file=/src/App.jsx'>
//           <FontAwesomeIcon className='source-code-icon' icon="fa-solid fa-code" size="2xs" />
//         </IconButton>
//       </div>
//     </div>
//   );
// }

// const CardSlider = () => {
//   return (
//     <div className='slider-container'>
//       <Swiper
//       slidesPerView={1}
//       spaceBetween={10}
//       pagination={{
//         clickable: true,
//       }}
//       breakpoints={{
//         500: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         850: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//         },
//         1100: {
//           slidesPerView: 4,
//           spaceBetween: 10,
//         },
//       }}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       {hobbies.map((hobby) => (
//           <SwiperSlide key={hobby.id}>
//             <div className='card-icon'>
//                 {hobby.icon}
//             </div>
//             <div className='card-contents'>
//               <div className='card-title'>{hobby.hobby}</div>
//               <div className='card-description'>{hobby.description}</div>
//             </div>
//           </SwiperSlide>
//       ))}
//     </Swiper>
//     <div className='source-container'>
//         <div className='source-text'>Built using Swiper.</div>
//         <IconButton href='https://codesandbox.io/p/sandbox/d2yx72?file=/src/App.jsx'>
//           <FontAwesomeIcon className='source-code-icon' icon="fa-solid fa-code" size="2xs" />
//         </IconButton>
//       </div>
//     </div>
//   );
// }

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
      </div>
    </div>
  );
}

export default About;