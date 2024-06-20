import React from 'react';
import 'devicon/devicon.min.css';
import './Skills.css'; // For custom styling

// Mapping technology names to Devicon class names
const techToDevicon = {
  javascript: 'devicon-javascript-plain',
  react: 'devicon-react-original',
  nodejs: 'devicon-nodejs-plain',
  python: 'devicon-python-plain',
  docker: 'devicon-docker-plain',
  github: 'devicon-github-original',
  aws: 'devicon-amazonwebservices-original',
  anaconda: 'devicon-anaconda-original colored',
  bash: 'devicon-bash-plain colored',
  c: 'devicon-c-plain colored',
  cplusplus: 'devicon-cplusplus-plain colored',
  flask: 'devicon-flask-original colored',
  git: 'devicon-git-plain colored',
  pytorch: 'devicon-pytorch-plain colored',
  tensorflow: 'devicon-tensorflow-original colored',
  mongodb: 'devicon-mongodb-plain colored',
  postgresql: 'devicon-postgresql-plain colored',
  linux: 'devicon-linux-plain colored',
  java: 'devicon-java-plain colored',
  html: 'devicon-html5-plain colored',
  css: 'devicon-css3-plain colored',

  // Add more mappings as needed
};

const Skills = ({ skills }) => {
  return (
    <div className="skills-section">
      <h2 className="display-4 pb-5 text-center">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => {
          const deviconClass = techToDevicon[skill.toLowerCase()];
          if (!deviconClass) {
            console.warn(`Devicon class not found for ${skill}`);
            return null; // Skip if the skill is not mapped
          }
          return (
            <i
              key={skill}
              className={`${deviconClass} colored skill-icon`}
              title={skill}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;


// import React from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import SkillsTab from "./SkillsTab";
// import Row from "react-bootstrap/Row";
// import { Jumbotron } from "./migration";
// import { Container } from "react-bootstrap";
// import { useScrollPosition } from "../../hooks/useScrollPosition";

// const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
//   const skillsTabRef = React.useRef(null);
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   //const navbarDimensions = useResizeObserver(navbarMenuRef);

//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
//     },
//     [],
//     skillsTabRef
//   );
//   return (
//     <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
//       <Container className="p-5 ">
//         <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
//           {heading}
//         </h2>
//         <Tabs
//           className="skills-tabs"
//           defaultActiveKey="hard-skills"
//           id="skills-tabs"
//           fill
//         >
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="hard-skills"
//             title="Technical Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="soft-skills"
//             title="Soft Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={softSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//         </Tabs>
//       </Container>
//     </Jumbotron>
//   );
// });

// export default Skills;
