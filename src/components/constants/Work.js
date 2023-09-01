import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import '../routes/experiences/Experiences.css'

export const work = [
  {
    id: 1,
    company: <div>ShipStation Auctane <IconButton href="https://auctane.com/" style={{ padding: 0 }}><FontAwesomeIcon icon="fa-solid fa-gear" size="2xs" style={{ color: '#6c64d1' }} /></IconButton></div>,
    position: 'Software Engineer Intern',
    date: 'Jun 2023 - Aug 2023',
    bullets: [
      <div>
        Resolved bugs and made 40+ enhancements to a key internal tool for support and sales teams. Integrated technologies like <b>DynamoDB</b>,<b>LaunchDarkly</b>, and <b>Terraform</b>.
      </div>,
      <div>
        Deployed code within the first week, improving the workflow of the support team by 65% and providing vital statistics for customer issue resolution insights.
      </div>,
      <div>
        Worked directly with support agents to tailor advanced features for the tool, resulting in solutions that directly met operational needs.
      </div>,
      <div>
        Undertook the migration of the codebase from <b>React 0.14</b> to <b>React 16.8</b>, ensuring compatibility and leveraging new features and better code practices.
      </div>,
    ],
    takeaways: [
      <div>
        <b>Agile Learning</b>: At ShipStation, the ability to deploy code within my first week and the continuous feedback loop with my team fostered a mindset of agile learning. I discovered the power of adaptability and embracing change as essential components of successful software development. 
      </div>,
      <div>
        <b>User-Centric Design</b>: My experiences at ShipStation underscore my commitment to ensuring that solutions are designed with the end-user in mind. Collaborating directly with support agents allowed me to deeply understand their workflow and challenges, emphasizing usability and intuitive design in the features I developed.
      </div>,
      <div>
        <b>Effective Communication</b>: Working with support agents honed my ability to communicate complex technical concepts in a clear and understandable manner. It also taught me the importance of active listening, gathering feedback, and fostering an open dialogue with stakeholders.
      </div>,
    ]
  },
  {
    id: 2,
    company: <div>Mond Venture <IconButton href="https://www.columbiabuildlab.com/" style={{ padding: 0 }}><FontAwesomeIcon icon="fa-solid fa-puzzle-piece" size="2xs" style={{ color: '#6c64d1' }} /></IconButton></div>,
    position: 'Software Engineer Intern',
    date: 'Jan 2023 – May 2023',
    bullets: [
      <div>
        Contributed to the overall architecture and design decisions in building the Mond mobile app, including implementing efficient database structures using <b>MongoDB</b> to ensure optimal performance and scalability.
      </div>,
      <div>
        Collaborated closely with the front-end development team to define API requirements <b>(GraphAPI)</b> and ensure smooth integration between the back-end and front-end components.
      </div>,
      <div>
        Optimized server-side code <b>(NodeJS)</b> and database queries to enhance the application's performance
      </div>,
    ],
    takeaways: [
      <div>
        <b>Database Design and Schema Planning</b>: As a key member of the Mond development team, I played a pivotal role in the planning and implementation of the database structure. Collaborating closely with our founder, James, we meticulously designed the database schema, considering the app's functionality, attributes, and relationships. This process involved identifying and defining database tables, fields, and their interconnections. My ability to translate the app's conceptual requirements into a well-structured database schema proved essential in ensuring optimal performance, scalability, and data integrity throughout the development process.
      </div>,
    ]
  },
  
];