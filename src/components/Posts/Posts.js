import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        card: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            padding: '0 30px',
        },
        link:{
            textDecoration:'none'
        }
    }),
);

const Posts = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>


                {
                    post.map(post =>
                        <Grid item xs={6} sm={4}>
                            <Paper className={classes.paper}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {post.title.slice(0,15)}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {post.body.slice(0,100)}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link to={'/post/'+post.id} className={classes.link}>
                                            <Button variant="contained" size="small" color="primary">
                                            Learn More
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    )
                }


            </Grid>
        </div>
    );
};

export default Posts;