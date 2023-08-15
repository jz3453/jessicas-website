import auctane from '../images/auctane.jpeg';
import bats from '../images/bats.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';

export const highlights = [
    {
      id: 1,
      title: 'Thank you Auctane!',
      caption: <div>I'm so grateful for an enriching summer as an intern at Auctane! {<FontAwesomeIcon icon="fa-solid fa-gear" />} The educational journey, welcoming atmosphere, and incredible camaraderie made every day truly special. Big thanks to the Auctane team for a memorable experience of growth and connections!</div>,
      image: <img className='reel-image' src={auctane} />,
      icons: <IconButton href='https://www.linkedin.com/posts/jessica-zhang-000556213_it-has-been-our-pleasure-here-at-auctane-activity-7095768624182816768-XXqy?utm_source=share&utm_medium=member_desktop'>
      <FontAwesomeIcon className='reel-slide-icon' icon="fa-brands fa-linkedin" />
    </IconButton>,
    },
    {
        id: 2,
        title: 'Austin Bats!',
        caption: <div>On our last week of our internship, we took an intern-outing to see the Austin Bats! Austin is home to the largest urban bat population in North America, specifically Mexican free-tailed bats, and we saw 100s of thousands of them pour out from under Congress Avenue Bridge.</div>,
        image: <img className='reel-image' src={bats} />,
        icons: <IconButton href='https://www.austintexas.org/things-to-do/outdoors/bat-watching/'>
        <FontAwesomeIcon className='reel-slide-icon' icon="fa-solid fa-book-open-reader" />
      </IconButton>
      },
  ];
