import React from 'react';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from './Navbar';
import Header from './Header';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
});

export const Home = () => {
    const classes = useStyles();
    return (
        <>
             <Navbar />
             <Header />
             <Particles 
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 75,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "star",
                            stroke: {
                                width: 1,
                                color: "black"
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default Home;
