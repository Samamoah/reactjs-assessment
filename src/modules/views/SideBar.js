import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    zIndex: theme.zIndex.appBar * 2,
    top: 0,
    height: '100vh',
    display: 'flex',
    backgroundColor: 'white',
    width: '294px',
  },

  rightLink: {
    fontSize: 14,
    color: '#000000',
    paddingLeft: 20,
    lineHeight: '48px',
    textTransform: 'capitalize',
    fontWeight: 600,
  },
  activeLink: {
    color: '#FF415B',
  },
}));

function SideBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Link
          component={NavLink}
          underline="none"
          exact={true}
          activeClassName={classes.activeLink}
          className={classes.rightLink}
          to="/"
        >
          {'Home'}
        </Link>
        <Link
          component={NavLink}
          underline="none"
          activeClassName={classes.activeLink}
          className={classes.rightLink}
          to="/services"
        >
          {'Services'}
        </Link>
        <Link
          component={NavLink}
          underline="none"
          activeClassName={classes.activeLink}
          className={classes.rightLink}
          to="/projects"
        >
          {'Projects'}
        </Link>
        <Link
          component={NavLink}
          underline="none"
          activeClassName={classes.activeLink}
          className={classes.rightLink}
          to="/about"
        >
          {'About'}
        </Link>
        <Link
          component={NavLink}
          underline="none"
          activeClassName={classes.activeLink}
          className={classes.rightLink}
          to="/contact-us"
        >
          {'Contact Us'}
        </Link>
      </div>
    </Fragment>
  );
}

export default SideBar;
