import Container from "../../../components/Container";
import Header from '../../../components/HeaderText';
import TitleAndMetaTags from '../../../components/TitleAndMetaTags';
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {sharedStyles, colors} from '../../../theme';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    // minHeight: '100vh',
    background: colors.alabaster,
    flex: 1,
  },
  container: sharedStyles.articleLayout.container,
  content: sharedStyles.articleLayout.content,
  markdown: sharedStyles.markdown,
  link: {
    fontSize: 18,
  },
});

const PageNotFound = ({classes, ...props}) => (
  <div className={classes.root}>
    <Container>
      <div className={classes.container}>
        <div className={classes.content}>
          <Header>Page Not Found</Header>
          <TitleAndMetaTags title="Winst360 - Page Not Found" />
          <div className={classes.markdown}>
            <p>
              Oops! Looks like you got lost.
            </p>

            <Link className={classes.link} to="/">Go Home</Link>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default withStyles(styles)(PageNotFound);
