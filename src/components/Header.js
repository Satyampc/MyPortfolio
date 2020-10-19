import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box} from "@material-ui/core";
import avatar from '../Ani_Mee.jpg';
import Typed from 'react-typed';

//CSS styles
const useStyles = makeStyles(themes=>({
    avatar: {
        width: themes.spacing(20),
        height: themes.spacing(20),
        margin: themes.spacing(1)
    },
    title: {
        color: "tomato",
    },
    subTitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    
}));

function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} src={avatar}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="avatar"/>
            </Grid>
                <Typography  className={classes.title} variant="h4">
                    <Typed strings={["Satyam Chandiramani"]} typeSpeed={80}/>
                </Typography>
        <br/>
        <Typography className={classes.subTitle} variant="h5">
                    <Typed 
                    strings={["Web Developement", "Web Designing", "Front End / UI"]} 
                    typeSpeed={80}
                    backSpeed={30}
                    loop
                    />
                </Typography>
        </Box>
    )
}

export default Header