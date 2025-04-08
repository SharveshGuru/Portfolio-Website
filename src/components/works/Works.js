/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import BrightFeed from '../../assets/recentprojects/brightfeed.png';
import HappyEstates from '../../assets/recentprojects/happyestates.png';

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
    },
    { 
      id: 2,
      title: 'Happy Estates', 
      description: `Developed an automated system that extracts real-time news from NDTV’s Top Feed RSS, analyzes sentiment to filter positive news, and summarizes articles. The system generates a professionally formatted PDF newsletter, reducing manual curation time. It provides users with an engaging and easily accessible summary of positive news.`,
      alter: 'Happy Estates',
      image: `${BrightFeed}`,
    },
    { 
      id: 3,
      title: 'Portfolio Website', 
      description: `Developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element. Inspired by Mark Tan.`,
      alter: 'Portfolio Website',
      image: `${Portfolio}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
