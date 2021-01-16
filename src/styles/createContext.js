// @flow

import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createGenerateClassName } from '@material-ui/styles';
import { colors } from '../theme';
import { green, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  spacing: 8,
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: {
      light: '#4F4F4F',
      main: colors.brand,
      dark: '#005681',
      // contrastText: defaultTheme.palette.getContrastText(colors.brandContrast),
    },
    secondary: {
      // main: '#4285f4',
      main: colors.accent,
      // contrastText: defaultTheme.palette.getContrastText('#4285f4'),
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      dark: green[700],
      main: green[700],
    },
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily:
      '"Nunito Sans", -apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI","Helvetica Neue",Arial,sans-serif', // Roboto, fallback to system fonts
  },
});

const createGenerateId = () => {
  let counter = 0;

  return (rule, sheet) => `applant--${rule.key}-${counter++}`;
};

export default function createContext() {
  // Configure JSS
  const jss = create(preset());
  jss.options.generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: 'applant',
  });
  jss.options.createGenerateId = createGenerateId;

  const sheetsManager = new Map();

  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
