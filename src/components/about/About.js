/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, MiddleName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${MiddleName} ${LastName} an eager, hands-on learner who's passionate about building scalable web applications. Whether it's crafting sleek UIs with ReactJS, architecting solid backends using Spring Boot and Django, or designing APIs that are as strong as my coffee—I've got it covered!

I love tackling challenges and finding creative solutions, all while making sure things run smoothly, securely, and look amazing. I thrive in collaborative environments, ready to contribute and help teams soar to new heights!

`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: '20vw',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme" style={{ fontFamily: 'NovaSquare-Regular', fontSize: '1.2rem' }}>
              {aboutme}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
