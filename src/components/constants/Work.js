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
      <div>
        <b>Git Profiency</b>: In adopting ShipStation's organized development process, I became adept at using Git to manage code repositories, track changes, and collaborate effectively with team members.
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
  {
    id: 3,
    company: <div>Smart Data Net Inc</div>,
    position: 'Software Engineer Intern',
    date: 'Jan 2023 – April 2023',
    bullets: [
      <div>
        Led the development of a serverless web application using React and third-party libraries as part of an evolving project at Smart Data Net Inc.
      </div>,
      <div>
        Communicated with a cross-functional team to understand company needs and user requirements, resulting in a tailored solution.
      </div>,
      <div>
        Strategically planned for future integration of the web application with a <b>RESTful API</b>, utilizing AWS services including <b>AWS API Gateway</b>, <b>AWS Lambda</b>, and <b>DynamoDB</b>. Ensured scalability and efficient handling of user requests as the project progresses.
      </div>,
    ],
    takeaways: [
      <div>
        <b>First time coding with React!!!</b>
      </div>,
      <div>
        <b>Effective Questioning and Communication</b>: Throughout the development process, I honed the skill of asking questions in a productive and precise manner. This was instrumental in fostering open dialogue within the team, ensuring that we addressed challenges efficiently and make informed decisions.
      </div>,
      <div>
        <b>Resourceful Problem-Solving</b>: I proactively sought solutions by meticulously reading and applying library documentations. Additionally, I spent significant time on platforms like Stack Overflow and AWS question boards, leveraging the wealth of collective knowledge in these online communities to overcome technical challenges and make informed decisions.
      </div>
    ]
  },
  {
    id: 4,
    company: <div>Columbia CS Department</div>,
    position: 'Data Structures Teaching Assistant',
    date: 'Aug 2022 – ',
    bullets: [
      <div>
        Conducted regular meetings with instructors to discuss course progress and address student concerns.
      </div>,
      <div>
        Provided one-on-one tutoring and held office hours to clarify course concepts, debug code, and offer additional support to struggling students.
      </div>,
      <div>
        Created supplementary learning resources, such as coding examples, documentation, and study guides, to aid students in their coursework.
      </div>,
      <div>
        Maintained effective communication channels with professors, students, and fellow teaching assistants to ensure a smooth learning experience.
      </div>,
    ],
    takeaways: [
      <div>
        <b>Adaptive Teaching Approach</b>: As a teaching assistant for Data Structures, I learned the importance of tailoring my teaching approach to meet the diverse needs of students. I discovered that not everyone learns in the same way, so I adapted my explanations to present complex concepts from multiple angles.
      </div>,
      <div>
        <b>Balancing Support and Encouragement</b>: One of the key lessons I gained from this experience was how to strike the right balance between providing assistance and encouraging independent thinking. I recognized that it's essential to offer guidance and support while also empowering students to explore and solve problems on their own. 
      </div>,
      <div>
        <b>Problem-Solving and Critical Thinking</b>: Teaching Data Structures required me to dive deep into problem-solving and critical thinking. By helping students dissect complex problems, develop algorithms, and optimize code, I further honed my problem-solving skills. 
      </div>
    ]
  },
];