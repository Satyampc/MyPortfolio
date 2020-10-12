import React from 'react';
import Navbar from './Navbar';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';
import project3 from '../images/react-redux.jpg';
import project4 from '../images/mern-stack.jpg';

const useStyles = makeStyles({
    mainContainer: {
        background:'#223',
        height:'100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin:'5rem auto'
    }
}) 


const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
                <Container id="skillSet" maxWidth="md">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
                        <h1 align='center' style={{ color: 'white' }}>Skill Set</h1>
                        <div className="bar front expert" data-skill="HTML5 & CSS3">95%</div>
                        <div className="bar front expert" data-skill="JavaScript">95%</div>
                        <div className="bar front advanced" data-skill="React.js">85%</div>
                        <div className="bar back learning" data-skill="Angular 2/4/7/8">80%</div>
                        <div className="bar back intermediate" data-skill="Node.js">75%</div>
                        <div className="bar basic" data-skill="TypeScript">60%</div>
                </Container>
 

            <Grid container justify='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                alt='Prokect 1'
                                height='140'
                                image={project1}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Priject 1
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='p'>
                                        Proident sit enim commodo et. Cupidatat fugiat anim commodo est. 
                                        Reprehenderit mollit irure consequat Lorem. Officia duis Lorem occaecat 
                                        ad labore occaecat fugiat laborum.
                                    </Typography>
                                </CardContent>
                             </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                     {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                alt='Project 2'
                                height='140'
                                image={project2}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Priject 2
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='p'>
                                        Proident sit enim commodo et. Cupidatat fugiat anim commodo est. 
                                        Reprehenderit mollit irure consequat Lorem. Officia duis Lorem occaecat 
                                        ad labore occaecat fugiat laborum.
                                    </Typography>
                                </CardContent>
                                 </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                 {/* Project 3 */}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                alt='Project 3'
                                height='140'
                                image={project3}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Priject 3
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='p'>
                                        Proident sit enim commodo et. Cupidatat fugiat anim commodo est. 
                                        Reprehenderit mollit irure consequat Lorem. Officia duis Lorem occaecat 
                                        ad labore occaecat fugiat laborum.
                                    </Typography>
                                </CardContent>
                                 </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                 {/* Project 4 */}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                alt='Project 4'
                                height='140'
                                image={project4}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 4
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='p'>
                                        Proident sit enim commodo et. Cupidatat fugiat anim commodo est. 
                                        Reprehenderit mollit irure consequat Lorem. Officia duis Lorem occaecat 
                                        ad labore occaecat fugiat laborum.
                                    </Typography>
                                </CardContent>
                             </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                </>
            )
        }

export default Portfolio
