import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import footerLogo from "../../images/footerLogo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      2011 to {new Date().getFullYear()}{" "}
      <Link color="inherit" href="/">
        Applant LLC — All Rights Reserved.
      </Link>{" "}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: "84px 111px",
    [theme.breakpoints.down("sm")]: {
     padding: "50px",
      display: "block",
    },
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  listItem: {
    color: "#ACB5BD",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
    lineHeight: "28px",
  },
  title: {
    color: "#212429",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "28px",
  },
  footerSummary: {
    color: "#000000",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "16px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  footerList: {
    marginRight: 40,
  },
  logo: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "28px",
    marginLeft: 4,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "rgba(0, 0, 0, 0.3)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 20px 0",
    },
  },
  footerCopyright: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    color: "#495057",
  },
  footerContainer: {
    marginTop: 92,
    display: "flex",
    alignItems: "center"
  },
  height: {
    height: "100%",
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      marginBottom: 10
    },
  },
  socialIcon: {
    marginRight: 20,
  },
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container justify="space-between">
          <Grid item xs={12} md={6}>
            <Grid container>
              <div className={classes.footerList}>
                <Typography className={classes.title}>Company</Typography>
                <ul className={classes.list}>
                  <li>
                    <Link className={classes.listItem} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.listItem} to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.listItem} to="/">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.footerList}>
                <Typography className={classes.title}>Services</Typography>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Link className={classes.listItem} to="/terms/">
                      UI/UX Design
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link className={classes.listItem} to="/privacy/">
                      Mobile App Development
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link className={classes.listItem} to="/privacy/">
                      Website Development
                    </Link>
                  </li>{" "}
                  <li className={classes.listItem}>
                    <Link className={classes.listItem} to="/privacy/">
                      Enterprise Software
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link className={classes.listItem} to="/privacy/">
                      SEO
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.footerList}>
                <Typography className={classes.title}>
                  Help & Support
                </Typography>
                <ul className={classes.list}>
                  <li>
                    <Link className={classes.listItem} to="/terms/">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.listItem} to="/privacy/">
                      Terms & Services
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.listItem} to="/privacy/">
                      Privacy & Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container classes={{ root: classes.height }}>
              <Grid item xs={12} md={5}></Grid>
              <Grid item xs={12} md={7}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="space-around"
                  classes={{ root: classes.height }}
                >
                  <div className={classes.logoContainer}>
                    <img src={footerLogo} alt="footer-logo" />
                    <Typography className={classes.logo}>Applant</Typography>
                  </div>
                  <Typography className={classes.footerSummary}>
                    Cutting edge solutions for a growing World.
                  </Typography>
                  {/*     <Typography className={classes.title}>
                <Copyright classes={{ listItem: classes.listItem }} />
              </Typography>*/}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classes.footerContainer}
      >
        <Grid container justify="space-between">
          <Typography className={classes.socialMedia}>
            <Link className={classes.socialIcon}>
              <img src={twitter} alt="twitter" />
            </Link>
            <Link className={classes.socialIcon}>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link className={classes.socialIcon}>
              <img src={instagram} alt="instagram" />
            </Link>
          </Typography>
          <Typography className={classes.footerCopyright}>
            <Copyright />
          </Typography>
        </Grid>
      </Container>
    </Typography>
  );
}
