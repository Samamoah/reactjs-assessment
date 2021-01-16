import React from 'react';
import {colors, fonts} from '../../theme';
import {withStyles} from '@material-ui/styles';

const styles = theme => ({
  root: {
    color: colors.dark,
    // marginRight: '5%',
    ...fonts.header,
  },
})

const Header = ({children, classes}) => (
  <h1
    className={classes.root}>
    {children}
  </h1>
);

export default withStyles(styles)(Header);
