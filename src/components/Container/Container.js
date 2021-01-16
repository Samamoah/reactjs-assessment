import React from 'react';
import { withStyles } from '@material-ui/styles';
import {media} from '../../theme';
import classnames from "classnames";

const styles = theme => ({
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',

    position: 'relative',
    paddingLeft: 10,
    paddingRight: 10,

    [media.greaterThan("xsmall")]: {
      width: 740,
    },

    [media.greaterThan('large')]: {
      width: 960
    },

    [media.greaterThan('xlarge')]: {
      width: 1200
    },

    '&:before': {
      content: '" "',
      display: 'table'
    },
    "&:after": {
      clear: "both",
    },
  },
});

const Container = ({children, className, classes, ...props}) => (
  <div className={classnames(classes.container, className)} {...props}>
    {children}
  </div>
);

export default withStyles(styles)(Container);
