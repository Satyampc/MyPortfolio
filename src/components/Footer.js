import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill:"tomato",
                fontSize:"1.8rem"
            }
        }
    }
})

const Footer = () => {

    const classes = useStyles();

    return (
        <>
            <BottomNavigation width="auto" style={{background: "#222"}}>
                <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<a target="_blank" href="https://www.facebook.com/"><FacebookIcon/></a>}/>
                <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<a target="_blank" href="mailto:asatyamchandiramani@gmail.com.com?subject=subject tect"><MailOutlineIcon/></a>}/>
                <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<a target="_blank" href="https://www.linkedin.com/in/satyam-chandiramani-4844371b4/"><LinkedInIcon/></a>}/>

            </BottomNavigation>  
        </>
    )
}

export default Footer
