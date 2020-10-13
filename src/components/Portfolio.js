import React from 'react';
import Navbar from './Navbar';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import project1 from '../images/WebPerforOptimize.jpg';
import project2 from '../images/ResponsiveWebApp.jpg';
import project3 from '../images/ScalibiltyBestPract.jpg';
import project4 from '../images/TeamPlayer.png';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    mainContainer: {
        background:'#223',
        height:'100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin:'5rem auto'
    },
    buttIcon: {
        marginLeft: "auto!important",
        color:"red"
    }
});


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
                                alt='Project 1'
                                height='140'
                                image={project1}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                    Performance
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='ul'>
                                        <ul>
                                            <li>Optimize the size of images on your website.</li>
                                            <li>Reducing the number of plugins.</li>
                                            <li>Minimize the number of JavaScript and CSS files.</li>
                                            <li>Utilized website caching.</li>
                                            <li>Implemented Gzip & other Compression tools</li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                             </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        <ThumbUpIcon />
                                    </Button>
                                    <Button className={classes.buttIcon}>
                                        <FavoriteBorderIcon/>
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
                                        Accessibility & Best Practices
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='ul'>
                                        <ul>
                                            <li>Have created perceivable content</li>
                                            <li>Offered several ways to navigate</li>
                                            <li>Made sure the app plays well with others.</li>
                                            <li>Test, test, test</li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                                 </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                         <ThumbUpIcon />
                                    </Button>
                                    <Button className={classes.buttIcon}>
                                        <FavoriteBorderIcon/>
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
                                        Scalability Best Practices
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='ul'>
                                        <ul>
                                            <li>Utilized asynchronous communication when possible. </li>
                                            <li>Monitoring - Understand your application’s performance from a customer’s perspective. </li>
                                            <li>Load & Performance Testing – Testing the performance of the application version before it goes into production.</li>
                                            <li>Root Cause Analysis - Ensuring by utilizing Root Cause Analysis to find and fix the real cause of issues.</li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                                 </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        <ThumbUpIcon />
                                    </Button>
                                    <Button className={classes.buttIcon}>
                                        <FavoriteBorderIcon/>
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
                                        Fianally being a Team Player
                                    </Typography>
                                    <Typography  variant='body2' color='textSecondary' component='ul'>
                                        <ul>
                                            <li>Embrace feedback & Be accountable</li>
                                            <li>Being goal-oriented instead of self-oriented.</li>
                                            <li>Positively learn skills for conflict resolution &</li>
                                            <li>And making sure you have an Effective Communication, with common Goals</li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                             </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        <ThumbUpIcon />
                                    </Button>
                                    <Button className={classes.buttIcon}>
                                        <FavoriteBorderIcon/>
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
