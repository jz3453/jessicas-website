import * as PiIcons from "react-icons/pi";
import * as GiIcons from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getAccidentFreeDays = () => {
    const dateThen = new Date('06/26/2023');
    const dateNow = new Date();

    const diff = dateNow.getTime() - dateThen.getTime();

    const days = Math.ceil(diff / (1000 * 3600 * 24)); // converts the milliseconds to days
    return days;
}  
  

export const hobbies = [
    {
      id: 1,
      hobby: 'Playing Piano',
      description: 'I took lessons for 10 years, and now I play for fun!',
      icon: <PiIcons.PiPianoKeysFill className='icon-size' />,
    },
    {
      id: 2,
      hobby: 'Reading',
      description: 'My most recent read was The Manhattan Project by Richard Rhodes.',
      icon: <PiIcons.PiBooks className='icon-size' />,
    },
    {
      id: 3,
      hobby: 'Painting',
      description: 'My favorite subjects are ducks. Landscapes aren\'t as easy as Bob Ross makes them look.',
      icon: <PiIcons.PiPalette className='icon-size' />,
    },
    {
      id: 4,
      hobby: 'Museums',
      description: 'Find me at the American Museum of Natural Science on a free day.',
      icon: <FontAwesomeIcon icon="fa-solid fa-building-columns" size="2xl" />,
    },
    {
        id: 5,
        hobby: 'Foodie',
        description: 'My friends and I try to eat at a different restaurant every week! (NYC halal for life)',
        icon: <GiIcons.GiNoodles className='icon-size' />,
    },
    {
        id: 6,
        hobby: 'Learning New Languages',
        description: <div>I am learning Spanish on Duolingo! My current {<FontAwesomeIcon icon="fa-solid fa-fire" />} is <b>{getAccidentFreeDays()}</b> days.</div>,
        icon: <FontAwesomeIcon icon="fa-solid fa-language" size="2xl" />,
    },
    {
        id: 7,
        hobby: 'NYT Games',
        description: 'I do the Wordle and Spelling Bee every day.',
        icon: <FontAwesomeIcon icon="fa-solid fa-newspaper" size="2xl" />,
    },
  ];