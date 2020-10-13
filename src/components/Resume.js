import Navbar from './Navbar';
import Typed from 'react-typed';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.5rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 0rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));


const Resume = () => {
  const classes = useStyles();
  return (
      <>
      <Navbar/>
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h5" align="center" className={classes.heading}>
                Over 9 Years of experience with
            <Typography className={classes.subHeading} style={{color: "white", fontSize: "13px"}} align="center">
                <Typed 
                strings={["Web Development, Web Designing, Testing and Documentation, HTML/HTML5 and CSS/CSS3, <br/> JavaScript, jQuery, React JS, Angular 2/4/6/7, TypeScript, Material UI, Canvas StoryBook and much more..."]} 
                typeSpeed={100}
                />
                </Typography>

      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2019 - Active
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}>
              UI Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
              Verizon -- Silver Springs, MD
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
              Developed an interactive commutating app, for Verizon Field Engineers. 
              Through this application, Verizon Field Engineers manage/modify their Jobs/Tasks online more 
              efficiently and this app is developed and implements user interface components by using React.js concepts
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2017 - 2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}>
              Front End UI Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
              Citizens Financial Group, Inc. -- Providence, RI
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
              Worked for the banking division as a Front-End developer to upgrade the 
              official website designed for personal banking users of Citizens Bank. 
              Through this, updated online banking system, customers can manage their accounts 
              online more efficiently. The Modules, where our team participated, included: 
              Account /Transaction /Rewards Modules.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2015 - 2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}>
              Front end UI Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
              CIGNA Corporation -- Columbus, OH
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
              The purpose of this project is to create self service capability for providers 
              requesting physical therapy authorizations. A web application is developed to 
              provide the users the ability to track demographic change requests received from 
              providers via mail and fax, to send auto-generated confirmation letters and additional 
              information request letters to providers.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2013 - 2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}>
              Frontend Web Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
              Amex -- New York, NY
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
              This project is about dealing Amex business card holders, providing 
              them with easy access to manage their payments and was also involved in internal 
              cash rewards program App development and created designs including responsive mobile 
              and tablet layouts. I was a part of the developing TEAM for building the website from
              Wireframes using AngularJS, JavaScript, jQuery, HTML, CSS moving on with Agile methodology. 
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2011 - 2013
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}>
              Web Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
              InterContinental Hotel Group -- Atlanta, GA
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
              Integration as a Service (IaaS) organizes the client data (transactions, history, 
              benefits and rewards) through this web-based portal named Revolver (Cash flow). 
              LaaS issues records to clients and organizes their data through this portal. Data 
              representation is carried out in a rich graphical interpretation using the latest UI technologies. 
          </Typography>
          </Box>
      </Box>
    </Box>
    </>
  );
};

export default Resume;