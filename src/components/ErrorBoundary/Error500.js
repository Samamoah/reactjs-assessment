import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Link } from '@material-ui/core';
import Helmet from "react-helmet";
import errorImageSRC from "../../images/undraw_server_down_s4lk.svg";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  },
  imageContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Error500 = ({error, children}) => {
  const classes = useStyles();
  if (error) {
    console.error(error);
  }

  // const theme = useTheme();
  // const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Helmet title="Something went wrong" />
      <Typography
        align="center"
        variant="h4">
        Ooops, something went wrong!
      </Typography>
      <Typography
        align="center"
        variant="subtitle2"
      >
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation
      </Typography>
      <div className={classes.imageContainer}>
        <img
          alt="Under development"
          className={classes.image}
          src={errorImageSRC}
        />
      </div>
      {
        children &&
        <div className={classes.content}>
          {children}
        </div>
      }
      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          component={Link}
          href="/"
          variant="outlined">
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default Error500;
