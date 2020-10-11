import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button, AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, makeStyles, ListItemIcon } from '@material-ui/core';
import { ArrowBack, Assignment, Home, Apps, ContactMail, AssignmentInd } from '@material-ui/icons';
import avatar from '../Ani_Mee.png';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
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
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/portfolio"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
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
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{background: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider 
                    anchor="right" 
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
