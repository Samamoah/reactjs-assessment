import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { NavLink } from 'react-router-dom';
// import Button from "../components/Button";
import { GlobalContext } from '../../context/GlobalState';
import Logo from '../../images/logo.svg';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';

const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontFamily: "'Roboto', sans-serif",
    '& img': {
      width: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      '& img': {
        width: '30px',
      },
    },
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    // justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
  left: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconLabel: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -9,
    backgroundColor: '#002B5C',
    '-webkit-box-sizing': 'border-box',
    boxSizing: 'border-box',
    WebkitBorderRadius: '50%',
    borderRadius: '50%',
    color: 'white',
    fontFamily: 'Open Sans',
    display: 'inline-block',
    fontSize: 11,
    height: 16,
    lineHeight: '18px',
    textAlign: 'center',
    width: 16,
    visibility: 'visible',
  },
  leftLinkActive: {
    color: theme.palette.secondary.main,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightLink: {
    fontSize: 16,
    color: '#000000',
    marginRight: '10px',
    textTransform: 'capitalize',
    fontWeight: 600,
  },
  linkSecondary: {
    color: theme.palette.secondary.dark,
  },
  iconRoot: {
    marginRight: 4,
  },
  activeLink: {
    color: '#FF415B',
  },
  contactUs: {
    marginLeft: theme.spacing(3),
    verticalAlign: 'middle',
    lineHeight: '32px',
  },
});

function AppAppBar(props) {
  const { classes } = props;

  const { cart } = useContext(GlobalContext);

  return (
    <div>
      <AppBar classes={{ root: classes.appBar }} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Container className={classes.container}>
            <Link
              component={NavLink}
              underline="none"
              className={classes.title}
              to="/"
            >
              <img src={Logo} alt="Shop" className={classes.iconRoot} />
            </Link>
            <div className={classes.left} />
            <div className={classes.right}>
              <Link
                component={NavLink}
                underline="none"
                exact={true}
                to="/cart"
                className={classes.rightLink}
              >
                Cart
              </Link>
              <Link
                component={NavLink}
                underline="none"
                exact={true}
                to="/cart"
              >
                <IconButton classes={{ label: classes.iconLabel }}>
                  <CartIcon style={{ color: 'black' }} />
                  <span
                    data-item-count={cart.length}
                    className={classnames(classes.bodyText4, classes.badge)}
                  >
                    {cart.length}
                  </span>
                </IconButton>
              </Link>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
