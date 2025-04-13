/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

import BrightFeed from '../../assets/recentprojects/brightfeed.png';
import HappyEstates from '../../assets/recentprojects/happyestates.png';
import AutomatedSystem from '../../assets/recentprojects/automatedsystem.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Happy Estates', 
      description: `Developed a Real Estate Management System with ReactJS and Spring Boot to streamline property rental for owners and tenants. Implemented JWT authentication and RBAC using Spring Security for secure user access. Utilized Spring JPA for efficient database interactions with MySQL. The platform allows seamless property listing, rental, and management.`,
      alter: 'Happy Estates',
      image: `${HappyEstates}`,
      githubLink: 'https://github.com/SharveshGuru/Happy-Estates',
    },
    { 
      id: 2,
      title: 'BrightFeed', 
      description: `Developed an automated system that extracts real-time news from NDTV's Top Feed RSS, analyzes sentiment to filter positive news, and summarizes articles. The system generates a professionally formatted PDF newsletter, reducing manual curation time. It provides users with an engaging and easily accessible summary of positive news.`,
      alter: 'BrightFeed',
      image: `${BrightFeed}`,
      githubLink: 'https://github.com/SharveshGuru/BrightFeed-Positive-News-Aggregator',
    },
    { 
      id: 3,
      title: 'Duplicate Press Title Verifier', 
      description: `An intelligent web application that verifies the uniqueness of press titles using advanced text similarity algorithms and ensures regulatory compliance. The system employs multiple similarity checking algorithms including Soundex, Levenshtein Distance, and TF-IDF with Cosine Similarity to prevent duplicate titles and maintain regulatory standards.`,
      alter: 'Automated System to Verify Duplicate Press Titles',
      image: `${AutomatedSystem}`,
      githubLink: 'https://github.com/SharveshGuru/Automated-Online-System-to-Verify-Duplicate-Press-Titles',
    },
  ]);

  return (
    <section id="works">
      <Container component="main" style={{ fontFamily: "NovaSquare-Regular" }} className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                {project.id + '. ' + project.title}
              </h3>
              <p className="description">
                {project.description}
              </p>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};


// /* eslint-disable no-unused-vars */
// import React from "react";
// import { useState } from "react";
// import { Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextDecrypt } from "../content/TextDecrypt";

// import './Works.css';

// // Import ../../assets/recentprojects/
// // import Portfolio from '../../assets/recentprojects/react-portfolio.png';
// import BrightFeed from '../../assets/recentprojects/brightfeed.png';
// import HappyEstates from '../../assets/recentprojects/happyestates.png';
// import AutomatedSystem from '../../assets/recentprojects/automatedsystem.png';
// const useStyles = makeStyles((theme) => ({
//   main: {
//     maxWidth: '100vw',
//     marginTop: '3em',
//     marginBottom: "auto",
//   },
// }));

// export const Works = () => {
//   const classes = useStyles();
//   const [projects, setProjects] = useState([
//     { 
//       id: 1,
//       title: 'Happy Estates', 
//       description: `Developed a Real Estate Management System with ReactJS and Spring Boot to streamline property rental for owners and tenants. Implemented JWT authentication and RBAC using Spring Security for secure user access. Utilized Spring JPA for efficient database interactions with MySQL. The platform allows seamless property listing, rental, and management.`,
//       alter: 'Happy Estates',
//       image: `${HappyEstates}`,
//     },
//     { 
//       id: 2,
//       title: 'BrightFeed', 
//       description: `Developed an automated system that extracts real-time news from NDTV's Top Feed RSS, analyzes sentiment to filter positive news, and summarizes articles. The system generates a professionally formatted PDF newsletter, reducing manual curation time. It provides users with an engaging and easily accessible summary of positive news.`,
//       alter: 'Happy Estates',
//       image: `${BrightFeed}`,
//     },
//     { 
//       id: 3,
//       title: 'Duplicate Press Title Verifier', 
//       description: `An intelligent web application that verifies the uniqueness of press titles using advanced text similarity algorithms and ensures regulatory compliance. The system employs multiple similarity checking algorithms including Soundex, Levenshtein Distance, and TF-IDF with Cosine Similarity to prevent duplicate titles and maintain regulatory standards.`,
//       alter: 'Automated System to Verify Duplicate Press Titles',
//       image: `${AutomatedSystem}`,
//     },
//   ]);

//   return (
//     <section id="works">
//       <Container component="main" style={{  fontFamily: "NovaSquare-Regular"}} className={classes.main} maxWidth="md">
//         {projects.map((project) => (
//           <div className="project" key={ project.id }>
//             <div className="__img_wrapper">
//               <img src={ project.image } alt={ project.alter }/>
//             </div>
//             <div className="__content_wrapper">
//               <h3 className="title">
//                 {project.id + '. ' + project.title }
//               </h3>
//               <p className="description">
//                 { project.description }
//               </p>
//             </div>
//           </div>
//         ))}
//       </Container>
//     </section>
//   );
// };
