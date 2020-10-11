import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';


const InputField = withStyles({
    root: {
        "& label.Mui-focused":{
            color: 'tomato',
        },
        "& label":{
            color: 'tan',
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset":{
                borderColor: "tan"
            },
            "&.Mui-focused fieldset":{
                borderColor: "tan"
            }
        }
    }
})(TextField);

const useStyles = makeStyles(theme =>({
    form:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
        
    }
}))

const Contacts = () => {

    const classes = useStyles();

    return (
        <>
        <Navbar/>
        <Box component='div' style={{background:"#233", height:"100vh" }}>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography 
                    style={{
                        color: "tomato", 
                        textAlign:"center", 
                        textTransform:"uppercase"}}
                    variant='h5'> Contact Me </Typography>
                    {/* Name Field */}
                    <InputField 
                    inputProps={{style:{color:"white"}}} 
                    fullWidth={true} 
                    label="Name" 
                    variant="outlined" 
                    margin="dense" 
                    size="medium"/>
                    <br/>

                    {/* Email Field */}
                    <InputField 
                    inputProps={{style:{color:"white"}}}
                    fullWidth={true}
                    label="Email" 
                    variant="outlined" 
                    margin="dense" 
                    size="medium"/>
                    <br/>

                    {/* Company Field */}
                    <InputField 
                    inputProps={{style:{color:"white"}}}
                    fullWidth={true} 
                    label="Company" 
                    variant="outlined" 
                    margin="dense" 
                    size="medium"/>
                    <br/>
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        Dont STOP
                    </Button>
                </Box>
            </Grid>
        </Box>
        </>
    )
}

export default Contacts
