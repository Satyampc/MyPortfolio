import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, makeStyles, ListItemIcon } from '@material-ui/core';
import { ArrowForward, Apps, ContactMail, AssignmentInd } from '@material-ui/icons';
import avatar from '../Ani_Mee.jpg';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ScrollUpButton from "react-scroll-up-button";

//CSS Styles//
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "tan"
    },
    homeIcon: {
        marginLeft: "auto",
        fontSize:"50px",
        color:"tan",
        "&:hover": {
            color: "tomato",
            cursor: "pointer"
        }, 
    },
    appBarSpacer: theme.mixins.toolbar
}));

const menuItems = [
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "SkillSet",
        listPath: "/portF"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contacts"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open)=>() =>{
        setState({...state, [slider]: open });
    };

    const classes = useStyles();
    
    const sideList = slider => (
        <Box
            onClick={toggleSlider(slider, false)}
            className={classes.menuSliderContainer} 
            component="div">
            <Avatar className={classes.avatar} src={avatar} alt="avatar"/>
                <Divider />
            <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
            ))};
            </List>
        </Box>
    )
    
    return (
        <>
        <Box component="nav">
            <AppBar className={classes.appBarSpacer} style={{background: "#222", marginBottom:"5.5rem"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowForward style={{background: "tan"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <Link className={classes.homeIcon} to="/portfolio">         
                        <HomeTwoToneIcon/>
                    </Link>
                    <MobileRightMenuSlider 
                        anchor="right" 
                        open={state.right}
                        onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer/>
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
            <ScrollUpButton />
        </Box>
        </>
    )
}

export default Navbar
