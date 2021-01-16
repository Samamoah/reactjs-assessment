import React, { Component } from 'react';
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import createContext from '../styles/createContext';
import * as Sentry from "@sentry/browser";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

// Apply some reset
export const baseStyles = theme => ({
  '@global': {
    // html: {
    //   fontSize: "62.5%",
    //   MozOsxFontSmoothing: 'grayscale',
    //   border: 0,
    //   margin: 0,
    //   padding: 0,
    //   verticalAlign: 'baseline',
    //   color: 'rgba(0,0,0,0.87)',
    // },
    // 'html, body': {
    //   margin: 0,
    //   padding: 0,
    // },
    // 'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    //   display: 'block',
    // },
    body: {
      // display: "flex",
      // WebkitFlexDirection: "column",
      // flexDirection: "column",
      // fontFamily: "'Roboto', sans-serif",
      // fontSize: 13,
      background: theme.palette.background.paper,
      WebkitFontSmoothing: "antialiased",
    },
    '#root, #app': {
      
    },
    a: {
      backgroundColor: 'transparent',
      color: 'inherit',
      textDecoration: 'none'
    },
    '*': {
      margin: 0,
      padding: 0,
      outline: 0
    },
    'fieldset': {
      minWidth: 0,
      border: 0,
    },
    'fieldset, legend': {
      margin: 0,
      padding: 0,
    },
  },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(baseStyles)(AppWrapper);

const context = createContext();

function withRoot(BaseComponent) {
  class WithRoot extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error });
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
    }

    render() {
      
      if (this.state.error) {
        //render fallback UI
        return (
          <Button color="primary" onClick={() => Sentry.showReportDialog({eventId: Sentry.lastEventId()})}>Report feedback</Button>
        );
      } else {
        return (
          <StylesProvider jss={context.jss} generateClassName={context.jss.options.generateClassName}>
            <ThemeProvider theme={context.theme}>
              <CssBaseline />
              <AppWrapper>
                <BaseComponent {...this.props} />
              </AppWrapper>
            </ThemeProvider>
          </StylesProvider>
        );
      }
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot');
  }

  return WithRoot;
}

export default withRoot;