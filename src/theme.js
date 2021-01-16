import hex2rgba from 'hex2rgba';

const drawerWidth = 256;

const drawerMiniWidth = 80;

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const colors = {
  note: '#ffe564',
  dark: '#282c34',
  gray: '#f2f1f3',
  alabaster: '#fafafa',
  text: '#333333',
  subtle: '#6d6d6d',
  divider: '#ececec',
  // brand: "#0d122b",
  brand: '#006994',
  // brand: "#5e7480",
  // brand: "#202634",
  accent: '#0288d1',
  accentDark: '#bb002f',
  accentLight: '#ff5983',
  teal: '#94ACB5',
  slateGrey: '#677E92',
  porcelain: '#ECEFF1',
  catskillWhite: '#F5F7FA',
};

const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },
  xtreme: { min: 1800, max: Infinity },

  // Sidebar/nav related tweakpoints
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },
};

const media = {
  between(smallKey, largeKey, excludeLarge) {
    if (excludeLarge) {
      return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
        SIZES[largeKey].min - 1
      }px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`;
      }
    }
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    } else if (size.max == null) {
      return media.greaterThan(key);
    } else {
      return media.between(key, key);
    }
  },
};

const clearfix = {
  '&:before': {
    display: 'table',
    content: "''",
  },
  '&:after': {
    clear: 'both',
    content: "''",
    display: 'table',
  },
};

const fonts = {
  header: {
    fontSize: 60,
    lineHeight: '65px',
    fontWeight: 700,

    [media.lessThan('medium')]: {
      fontSize: 40,
      lineHeight: '45px',
    },
  },
  small: {
    fontSize: 14,
  },
};

const containerFluid = {
  // paddingRight: "15px",
  // paddingLeft: "15px",
  marginRight: 'auto',
  marginLeft: 'auto',
  '&:before,&:after': {
    display: 'table',
    content: "' '",
  },
  '&:after': {
    clear: 'both',
  },
};

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 768px)': {
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
  '&:before,&:after': {
    display: 'table',
    content: "' '",
  },
  '&:after': {
    clear: 'both',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '6px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
};

const defaultFont = {
  fontFamily:
    "'Nunito Sans', -apple-system,system-ui,BlinkMacSystemFont," +
    "'Segoe UI','Helvetica Neue',Arial,sans-serif", // Nunito Sans, fallback to system fonts
  fontWeight: '300',
  lineHeight: '1.5em',
};

const primaryColor = '#006994';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const grayColor = '#999999';

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0,86,129, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0,86,129, 0.2)',
};
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

// old card headers
const orangeCardHeader = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const greenCardHeader = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const redCardHeader = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const blueCardHeader = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const purpleCardHeader = {
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  ...primaryBoxShadow,
};
// new card headers
const warningCardHeader = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const successCardHeader = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const dangerCardHeader = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background: `${primaryColor}!important`,
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow,
};

const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
};

const cardHeader = {
  margin: '-20px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const tooltip = {
  padding: '10px 15px',
  minWidth: '130px',
  color: '#FFFFFF',
  lineHeight: '1.7em',
  background: 'rgba(85,85,85,0.9)',
  border: 'none',
  borderRadius: '3px',
  opacity: '1!important',
  boxShadow:
    '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
  maxWidth: '200px',
  textAlign: 'center',
  fontFamily:
    "'Nunito Sans', -apple-system,system-ui,BlinkMacSystemFont," +
    "'Segoe UI','Helvetica Neue',Arial,sans-serif", // Nunito Sans, fallback to system fonts,
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  textShadow: 'none',
  textTransform: 'none',
  letterSpacing: 'normal',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal',
  whiteSpace: 'normal',
  lineBreak: 'auto',
};

const title = {
  color: '#3C4858',
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily:
    "'Nunito Sans', -apple-system,system-ui,BlinkMacSystemFont," +
    "'Segoe UI','Helvetica Neue',Arial,sans-serif", // Nunito Sans, fallback to system fonts
  '& small': {
    color: '#777',
    fontSize: '65%',
    fontWeight: '400',
    lineHeight: '1',
  },
};

const cardTitle = {
  ...title,
  marginTop: '0',
  marginBottom: '3px',
  minHeight: 'auto',
  '& a': {
    ...title,
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto',
  },
};

const btn = {
  MozAppearance: 'none',
  MozUserSelect: 'none',
  MSUserSelect: 'none',
  WebkitAppearance: 'none',
  WebkitUserSelect: 'none',
  appearance: 'none',
  backgroundPosition: '-1px -1px',
  backgroundRepeat: 'repeat-x',
  backgroundSize: '110% 110%',
  border: '1px solid rgba(27,31,35,.2)',
  borderRadius: '.25em',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px',
  padding: '6px 12px',
  position: 'relative',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

const btnSmall = {
  fontSize: 12,
  lineHeight: '20px',
  padding: '3px 10px',
};

const cardSubtitle = {
  marginTop: '-.375rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

const sharedStyles = {
  articleLayout: {
    container: {
      display: 'flex',
      minHeight: 'calc(100vh - 60px)',
      [media.greaterThan('sidebarFixed')]: {
        maxWidth: 840,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    content: {
      marginTop: 40,
      marginBottom: 120,

      [media.greaterThan('medium')]: {
        marginTop: 50,
      },
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',

      [media.between('small', 'sidebarFixed')]: {
        borderLeft: '1px solid #ececec',
        marginLeft: 80,
      },

      [media.between('small', 'largerSidebar')]: {
        flex: '0 0 200px',
        marginLeft: 80,
      },

      [media.between('small', 'medium')]: {
        marginLeft: 40,
      },

      [media.greaterThan('largerSidebar')]: {
        flex: '0 0 300px',
      },

      [media.greaterThan('sidebarFixed')]: {
        position: 'fixed',
        right: 0,
        width: 300,
        zIndex: 2,
      },
    },

    editLink: {
      color: colors.subtle,
      borderColor: colors.divider,
      transition: 'all 0.2s ease',
      transitionPropery: 'color, border-color',
      whiteSpace: 'nowrap',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',

      '&:hover': {
        color: colors.text,
        borderColor: colors.text,
      },
    },
  },

  container: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    [media.greaterThan('small')]: {
      maxWidth: 540,
    },
    [media.greaterThan('medium')]: {
      maxWidth: 720,
    },
    [media.greaterThan('large')]: {
      maxWidth: 960,
    },
    [media.greaterThan('xlarge')]: {
      maxWidth: 1140,
    },
  },

  paddingTop4: {
    paddingTop: '2.25rem!important',
  },

  paddingTop5: {
    paddingTop: '4.5rem!important',
  },

  marginBottom5: {
    marginBottom: '4.5rem!important',
  },

  marginTop5: {
    marginTop: '4.5rem!important',
  },

  marginBottom20: {
    marginBottom: 20,
  },

  marginTop20: {
    marginTop: 20,
  },

  marginTop30: {
    marginTop: 30,
  },

  paddingBottom5: {
    paddingBottom: '4.5rem!important',
  },

  markdown: {
    lineHeight: '25px',
    // fontFamily: ""Nunito Sans", "Helvetica", "Arial", sans-serif",

    '& > p:first-child': {
      fontSize: 18,
      fontWeight: 300,
      color: colors.subtle,

      [media.greaterThan('xlarge')]: {
        fontSize: 24,
      },

      '& a, & strong': {
        fontWeight: 400,
      },
    },

    '& > h2': {
      display: 'inline-block',
      color: colors.dark,
      paddingTop: 0,
      fontSize: 20,
      lineHeight: 1.1,
      '&&': {
        paddingTop: 0,
        fontWeight: 400,
        fontSize: 20,
        [media.greaterThan('xlarge')]: {
          fontSize: 24,
          fontWeight: 500,
        },
      },
    },

    '& > h3': {
      // textAlign: "center",
      color: colors.dark,
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.5,
    },

    '& p': {
      lineHeight: '1.75',
      fontWeight: 400,
      color: '#555555',
      marginBottom: 0,
      fontSize: 18,
      // maxWidth: "42em",

      '&:first-of-type': {
        marginTop: 15,
      },

      '&:first-child': {
        marginTop: 0,
      },

      [media.lessThan('large')]: {
        fontSize: 16,
        marginTop: 25,
      },
    },

    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20,
    },

    '& p > code, & li > code': {
      background: hex2rgba(colors.note, 0.3),
      padding: '0 3px',
      fontSize: 'inherit',
      color: colors.text,
      wordBreak: 'break-word',
    },

    '& hr': {
      height: 1,
      marginBottom: -1,
      border: 'none',
      borderBottom: `1px solid ${colors.divider}`,
      marginTop: 40,

      '&:first-child': {
        marginTop: 0,
      },
    },

    '& h1': {
      lineHeight: 1.2,

      [media.size('xsmall')]: {
        fontSize: 30,
      },

      [media.between('small', 'large')]: {
        fontSize: 45,
      },

      [media.greaterThan('xlarge')]: {
        fontSize: 60,
      },
    },

    '& h2': {
      borderTop: `1px solid ${colors.divider}`,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,
      fontWeight: 500,

      '&:first-child': {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0,
      },

      [media.lessThan('large')]: {
        fontSize: 20,
      },
      [media.greaterThan('xlarge')]: {
        fontSize: 35,
      },
    },

    '& hr + h2': {
      borderTop: 0,
      marginTop: 0,
    },

    '& h3': {
      paddingTop: 45,

      [media.greaterThan('xlarge')]: {
        fontSize: 25,
        lineHeight: 1.3,
      },
    },

    '& h2 + h3, & h2 + h3:first-of-type': {
      paddingTop: 30,
    },

    '& h4': {
      fontSize: 20,
      color: colors.subtle,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400,
    },

    '& h4 + p': {
      marginTop: 20,
    },

    '& ol, & ul': {
      marginTop: 20,
      fontSize: 16,
      color: colors.text,
      paddingLeft: 20,

      '& p, & p:first-of-type': {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2,
      },

      '& li': {
        marginTop: 20,
      },

      '& li.button-newapp': {
        marginTop: 0,
      },

      '& ol, & ul': {
        marginLeft: 20,
      },
    },

    '& img': {
      maxWidth: '100%',
    },

    '& ol': {
      listStyle: 'decimal',
    },

    '& ul': {
      listStyle: 'disc',
    },

    '& blockquote': {
      backgroundColor: hex2rgba('#ffe564', 0.3),
      borderLeftColor: colors.note,
      borderLeftWidth: 9,
      borderLeftStyle: 'solid',
      padding: '20px 45px 20px 26px',
      marginBottom: 30,
      marginTop: 20,
      marginLeft: -30,
      marginRight: -30,

      [media.lessThan('small')]: {
        marginLeft: -20,
        marginRight: -20,
      },

      '& p': {
        marginTop: 15,

        '&:first-of-type': {
          fontWeight: 700,
          marginTop: 0,
        },

        '&:nth-of-type(2)': {
          marginTop: 0,
        },
      },
    },

    '& .gatsby-highlight + blockquote': {
      marginTop: 40,
    },

    'b, strong': {
      fontWeight: 600,
    },
  },
};

const h2 = {
  fontSize: '1.25rem',
  lineHeight: 1.5,
  fontWeight: 300,
  textTransform: 'none',
  WebkitFontSmoothing: 'antialiased',
  letterSpacing: '0.025em',
  [media.greaterThan('medium')]: {
    fontSize: '1.875rem',
    lineHeight: 1.4,
    fontWeight: 300,
    textTransform: 'none',
  },
};

const h5 = {
  fontSize: '0.9375rem',
  lineHeight: 1.6,
  fontWeight: 500,
  textTransform: 'none',
  letterSpacing: '0.025em',
};

const textSecondary = {
  fontSize: '0.8125rem',
  lineHeight: 1.84615385,
  fontWeight: 400,
  textTransform: 'none',
  letterSpacing: '0.025em',
};

const footer = {
  position: 'absolute',
  width: '100%',
  height: '8rem',
  borderTop: '1px solid #fff',
  background: '#fff',
  color: '#9da3a6',
  textShadow: '0 1px 1px #fff',
  bottom: 0,
};

export {
  //variables
  drawerWidth,
  drawerMiniWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  // old card header colors
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader,
  // new card header colors
  colors,
  media,
  sharedStyles,
  fonts,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  tooltip,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
  clearfix,
  btn,
  btnSmall,
  h2,
  h5,
  textSecondary,
  footer,
};
