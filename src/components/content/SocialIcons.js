import React from 'react';
import { Link, Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../../settings/resume.json';

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: 'fixed',
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '1.25rem',
  },
}));

export const SocialIcons = () => {
  const classes = useStyles();

  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title={socialItem.username}
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label={socialItem.network}
          className={classes.iconButton}
        >
          <i className={`${classes.icon} ${socialItem.x_icon === 'fab fa-solid fa-envelope' ? 'fas fa-envelope' : socialItem.x_icon}`}></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return <div className={classes.socialIcons}>{socialItems}</div>;
};
